# SMI TEST-API

**pt-br**

Uma API Node.js que executa as quatro operações básicas: criar (create), ler (read), atualizar(update) e excluir (delete).

**en**

A Node.js API that performs CRUD operations (create, read, update and delete).

## Endpoints

- GET:
    - Exibe todas as demandas armazenadas na memória local.
    - Displays all the requests available in local memory.
  
- POST:
    - Cria uma nova demanda e salva seus dados na memória local.
    - Creates a new demand and stores its data in local memory.

- UPDATE:
    - Atualiza informações de uma demanda existente e guarda na memória local.
    - Updates data for an existing request and saves it in local memory.

- DELETE: 
    - Apaga os dados de uma demanda existente da memória local.
    - Deletes data of an existing demand from local memory.
  
## Middlewares:

*DemandsValidation*


--- Descrição / Description:
Um middlware que checa se o campo "description" existe ou não no corpo da requisição, se o campo não existir ele responde com um status 404 (Bad Request) e uma mensagem de erro. Se o campo estiver preenchido corretamente ele permite a execução da requisição para continuar para a próxima função.

Middleware that checks if the 'description' field is present in the request body. If it's not present, responds with a 400 (Bad Request) status and an error message. Otherwise, allows execution to continue to the next function/middleware.

```javascript
    const demandsValidation = (req, res, next) => {
        const { description } = req.body;

        if(!description) {
            res.status(400).json({ error: "Empty field, unauthorized."})
            return;
        }

        next();
    }
```

## Instalação / Installation

-- Git clone
-- npm install
