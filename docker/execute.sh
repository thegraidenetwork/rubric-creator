#!/usr/bin/env bash
echo "Azure Login:"
az login --service-principal -u $AZURE_APP_ID -p $AZURE_SECRET_KEY --tenant $AZURE_SUBSCRIPTION_ID

echo "Files to transfer:"
ls /dist

echo "Transferring:"
az storage blob upload-batch -d $AZURE_CONTAINER_PATH -s /dist --content-cache-control "$AZURE_CACHE_CONTROL" --account-key $AZURE_STORAGE_ACCOUNT_KEY --account-name $AZURE_STORAGE_ACCOUNT_NAME --overwrite

echo "Purging cache:"
az cdn endpoint purge -n $AZURE_ENDPOINT_NAME --content-paths / --profile-name $AZURE_CDN_PROFILE_NAME --resource-group $AZURE_CDN_RESOURCE_GROUP

echo "CDN Deployment complete."
