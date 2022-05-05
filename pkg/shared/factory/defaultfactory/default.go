package defaultfactory

import (
	"context"
	"net/http"

	"github.com/redhat-developer/app-services-cli/pkg/core/config"
	"github.com/redhat-developer/app-services-cli/pkg/core/httputil"
	"github.com/redhat-developer/app-services-cli/pkg/core/ioutil/iostreams"
	"github.com/redhat-developer/app-services-cli/pkg/core/localize"
	"github.com/redhat-developer/app-services-cli/pkg/core/logging"
	"github.com/redhat-developer/app-services-cli/pkg/core/servicecontext"
	"github.com/redhat-developer/app-services-cli/pkg/shared/connection"
	"github.com/redhat-developer/app-services-cli/pkg/shared/connection/kcconnection"
	"github.com/redhat-developer/app-services-cli/pkg/shared/factory"

	"github.com/redhat-developer/app-services-cli/internal/build"
)

// New creates a new command factory
// The command factory is available to all command packages
// giving centralized access to the config and API connection

// nolint:funlen
func New(id string, localizer localize.Localizer) *factory.Factory {
	io := iostreams.System()

	var logger logging.Logger
	var conn connection.Connection
	cfgFile := config.NewFile(id)
	ctxFile := servicecontext.NewFile(id)

	loggerBuilder := logging.NewStdLoggerBuilder()
	loggerBuilder = loggerBuilder.Streams(io.Out, io.ErrOut)
	logger, _ = loggerBuilder.Build()

	ctx := context.Background()

	connectionFunc := func(connectionCfg *connection.Config) (connection.Connection, error) {
		if conn != nil {
			return conn, nil
		}

		cfg, err := cfgFile.Load()
		if err != nil {
			return nil, err
		}

		if cfg.AuthURL == "" {
			cfg.AuthURL = build.ProductionAuthURL
		}
		if cfg.MasAuthURL == "" {
			cfg.MasAuthURL = build.ProductionMasAuthURL
		}

		builder := kcconnection.NewConnectionBuilder()

		builder.WithAccessToken(cfg.AccessToken)
		builder.WithRefreshToken(cfg.RefreshToken)
		builder.WithMASAccessToken(cfg.MasAccessToken)
		builder.WithMASRefreshToken(cfg.MasRefreshToken)
		builder.WithClientID(cfg.ClientID)

		if cfg.Scopes != nil {
			builder.WithScopes(cfg.Scopes...)
		}

		builder.WithURL(cfg.APIUrl)
		builder.WithAuthURL(cfg.AuthURL)
		builder.WithMASAuthURL(cfg.MasAuthURL)
		builder.WithConsoleURL(build.ConsoleURL)
		builder.WithInsecure(cfg.Insecure)
		builder.WithConfig(cfgFile)

		transportWrapper := func(a http.RoundTripper) http.RoundTripper {
			return &httputil.LoggingRoundTripper{
				Proxied: a,
				Logger:  logger,
			}
		}

		builder.WithTransportWrapper(transportWrapper)

		builder.WithConnectionConfig(connectionCfg)

		conn, err = builder.Build()
		if err != nil {
			return nil, err
		}

		err = conn.RefreshTokens(ctx)
		if err != nil {
			return nil, err
		}

		return conn, nil
	}

	return &factory.Factory{
		IOStreams:      io,
		Config:         cfgFile,
		Connection:     connectionFunc,
		Logger:         logger,
		Localizer:      localizer,
		Context:        ctx,
		ServiceContext: ctxFile,
	}
}
