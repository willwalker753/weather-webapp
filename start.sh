startPath=$(pwd)
scriptPath=$(realpath $(dirname "${BASH_SOURCE[0]}"))

cd $scriptPath

. create-node-alias.sh
nodebox-weather-webapp npm install
nodebox-weather-webapp npm run dev

cd $startPath
