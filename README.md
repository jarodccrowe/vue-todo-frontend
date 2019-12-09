# vue-todo-frontend

## General Notes
One limitation of the mocked backend is you can't
- make a put request to a 'user created' task
- make a delete request to a 'user create' task
- the backend would manage ids

Cypress testing doesn't seem to run on windows

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Run basic unit Tests
```
vue-cli-service test:unit 
```

### Clear unit test snapshots
```
vue-cli-service test:unit -- --u
```

### Run e2e Tests
```
test:e2e
```

### Compiles and minifies for production
```
npm run build
```
