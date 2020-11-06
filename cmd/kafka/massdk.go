package kafka

import (
	"fmt"
	"strings"

	mas "github.com/bf2fc6cc711aee1a0c2a/cli/client/mas"
	"github.com/bf2fc6cc711aee1a0c2a/cli/pkg/config"
)

// TODO refactor into separate config class

func BuildMasClient() *mas.APIClient {

	masCfg := mas.NewConfiguration()
	// TODO read flag from config
	cfg, err := config.Load()

	if err != nil {
		fmt.Println("Error loading configuration")
		return nil
	}

	if cfg.AccessToken == "" && cfg.RefreshToken == "" {
		fmt.Println("You must be loggen in")
		return nil
	}

	urlSegments := strings.Split(cfg.URL, "://")

	if len(urlSegments) > 1 {
		masCfg.Scheme = urlSegments[0]
		masCfg.Host = urlSegments[1]
	} else {
		masCfg.Host = urlSegments[0]
	}

	masCfg.AddDefaultHeader("Authorization", fmt.Sprintf("Bearer %s", cfg.AccessToken))
	client := mas.NewAPIClient(masCfg)
	return client
}