# HELP
# This will output the help for each task
.PHONY: help up down pull update

help: ## Aide
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

# Docker Compose TASKS
up: ## Monte les dockers
	@docker-compose -f backend/docker-compose.yml up -d
	@docker-compose -f frontend/docker-compose.yml up -d

restart: ## Redémarre les dockers
	@docker restart frontend
	@docker restart backend

down: ## Désinstalle les dockers
	@docker-compose -f backend/docker-compose.yml down
	@docker-compose -f frontend/docker-compose.yml down

clean: ## Nettoie les node_modules
	@docker exec -it frontend rm -r node_modules
	@docker exec -it backend rm -r node_modules
	@make restart

pull: ## Synchronise le projet
	@git pull

update: pull up restart ## Mets à jour le projet