# Add all the commands that must be run before starting development

echo "Setting up database directory"

mkdir ./database && mkdir ./database/mysqldata

echo "Installing client dependencies for local development"

cd v2client && yarn

# echo "Installing server dependencies for local development"

# Check if composer exists and then run install