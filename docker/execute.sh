#!/usr/bin/env bash
echo "Azure Login:"
az login --service-principal -u $AZURE_APP_ID -p $AZURE_SECRET_KEY --tenant $AZURE_SUBSCRIPTION_ID

echo "Files to transfer:"
ls /dist

echo "Transferring:"
az storage blob upload-batch -d http://tgncdnstorage.blob.core.windows.net/$AZURE_CONTAINER_NAME -s /dist --content-cache-control "$AZURE_CACHE_CONTROL" --account-key $AZURE_STORAGE_ACCOUNT_KEY --account-name $AZURE_STORAGE_ACCOUNT_NAME

# echo "Purging cache:"
# az cdn endpoint purge -n $AZURE_ENDPOINT_NAME --content-paths / --profile-name tgn-cdn --resource-group group-production

echo "CDN Deployment complete."
