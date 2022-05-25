# Simple todo list project

To start the project you will need Docker and docker-compose we recommend you use linux although it is not necessary.

First build with docker by navigating to the root directory of the project and running.
```bash
sudo docker-compose build
```

Now run the application.
```
sudo docker-compose up
```

This will start containers for mongodb, frontend and backend.

This application frontend if accessible at `http://localhost:8000/` and the backend at `http://localhost:8001/`

To stop the app press `Ctrl + C` and wait for all the containers to stop.