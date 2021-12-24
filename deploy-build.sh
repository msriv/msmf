# Remove existing build folder
rm -rf ./build

# Creating new build folder
mkdir build && mkdir build/client && mkdir build/server

# Export HTML Build for client
cd ./v2client && yarn build:export

# Copying exported v2client to build dir
cp -a ./out/. ../build/client/

