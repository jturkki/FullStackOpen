sequenceDiagram
  participant server
  participant browser

  browser->>server:get https://studies.cs.helsinki.fi/exampleapp/spa
  activate server
  server-->>browser: HTML document
  deactivate server

  browser->>server: get https://studies.cs.helsinki.fi/exampleapp/main.css
  activate server
  server-->>browser: CSS file
  deactivate server

  browser->>server: get https://studies.cs.helsinki.fi/exampleapp/spa.js
  activate server
  server-->>browser: javascript file
  deactivate server

  Browser starts JavaScript code that fetches JSON from server

  browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
  activate server
  server-->>browser: [{ "content": "Viestiä pukkaa", "date": "2024-4-1",...]
  deactivate server

  Browser renders the notes
