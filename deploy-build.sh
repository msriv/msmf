# Make sure we're in current dir
cd $HOME/Documents/projects/msmf

# Remove existing build folder
rm -rf ./build

# Creating new build folder
mkdir build && mkdir build/client && mkdir build/server

# Export HTML Build for client
cd ./v2client && yarn build:export

# Copying exported v2client to build dir
cp -a ./out/. ../build/client/

# Make sure we're in current dir
cd $HOME/Documents/projects/msmf

# Remove existing server build
rm -rf ./v2server/v2server.zip

# Zipping v2server folder 
zip -r ./v2server/v2server.zip v2server/

# Copying exported v2server to build dir
cp ./v2server/v2server.zip ./build/server