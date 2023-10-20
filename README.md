# Sample React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It was built to demonstrate deploying react app in a container to ELB on AWS.

## Running in docker on ec2 instance
```
export INSTANCE_ID=$(curl --silent http://169.254.169.254/latest/meta-data/instance-id/)
docker build -t react-sample .
docker run -d -p 80:3000 -e REACT_APP_NODE_APP_URL="http://<private_ip_of_node_app>:8000" -e REACT_APP_INSTANCE_ID=$INSTANCE_ID react-sample
```