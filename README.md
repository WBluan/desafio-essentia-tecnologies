# Desafio Essentia Technologies

Projeto Fullstack com **Angular**, **Node.js**, **MySQL** e **MongoDB**, executado em containers Docker.  
Inclui autenticação com JWT, API REST e integração frontend-backend via proxy.

## 🐳 Pré-requisitos
Antes de rodar o projeto, você precisa ter instalado:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)


##  Configuração e Execução
### Clone o repositório

```bash
git clone https://github.com/WBluan/desafio-essentia-tecnologies.git
cd desafio-essentia-tecnologies
````

### Suba os containers
```bash
docker compose up -d
````

Isso irá iniciar:

| Serviço  | Porta Externa | Descrição                 |
|-----------|----------------|----------------------------|
| **frontend** | `4200` | Aplicação Angular |
| **backend**  | `3000` | API Node.js/Express |
| **mysql**     | `3306` | Banco de dados relacional |
| **mongo**     | `27017` | Banco de dados NoSQL |

**OBS: Tenha certeza que essas portas acima não estão ocupadas!!**

**OBS: Caso ocorra algum erro para fazer registro, peço que espere um pouco e tente novamente, o container do mysql pode demorar um pouco para subir.**

<b>Recomendo monitorar os containers e aguardar todos serem exibidos:</b>
```bash
docker ps
````

### Acessar a Aplicação
* Acesse o front-End: http://localhost:4200
* Crie sua conta na tela /register
* Realize seu login
