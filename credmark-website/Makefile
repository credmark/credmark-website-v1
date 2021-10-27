export AWS_PROFILE=credmark
export domain=credmark.com

deploy-staging: 
	git pull
	cp .serverless/.serverless-staging/* .serverless/
	export subdomain="staging"; export stage="staging"; serverless --stage="staging"	
	cp .serverless/* .serverless/.serverless-staging

deploy-prod: 
	git pull
	cp .serverless/.serverless-prod/* .serverless/
	serverless --stage="prod"
	cp .serverless/* .serverless/.serverless-prod/
