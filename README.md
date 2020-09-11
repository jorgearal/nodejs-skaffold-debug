# NodeJS Application debug
This project is a demonstration of a nodejs application being debugged through docker and skaffold 

# Set up
You will need the following tools to be able to fully run this example
1. Skaffold
2. Docker
3. Kubernetes
3. kubectl

# Getting started
1. Install the npm dependencies
    ```sh
    // in an empty folder in a separate terminal window...
    git clone https://github.com/jorgearal/nodejs-skaffold-debug.git
    cd nodejs-skaffold-debug
    npm i
    ```
    
2. Run the example service
    ```sh
    // in a separate terminal window, from nodejs-skaffold-debug root folder...
    npm run start
    ```
    
3. Launch the application by navigating to http://localhost:3000 in your browser.

## Debugging the example locally
1. Run the example service as debug
    ```sh
    // in a separate terminal window, from nodejs-skaffold-debug root folder...
    npm run debug
    ```

2. Run the debug option "Attach node" in vscode

## Debugging the example in a docker container
1. Compile the docker container
    ```sh
    // in a separate terminal window, from nodejs-skaffold-debug root folder...
    docker-compose -f .\docker-debug-compose.yaml up
    ```
2. Run the debug option "Docker: Attach node" in vscode

## Debugging the example in a kubernetes pod through skaffold
1. Run the service with skaffold
    ```sh
    // in a separate terminal window, from nodejs-skaffold-debug root folder...
    skaffold dev
    ```
2. Run the debug option "Docker: Attach node" in vscode

3. Start making changes in the code, it will refresh the docker container as you work