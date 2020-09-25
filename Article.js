class Article {

    constructor(containerElement){
        this.containerElement = containerElement;
        this.createPost = this.createPost.bind(this);
        this.pressLike = this.pressLike.bind(this);
        this.pressDislike = this.pressDislike.bind(this);
        this.removeLike = this.removeLike.bind(this);
        this.removeDislike = this.removeDislike.bind(this);
        this.countLike = 0;
        this.countDislike = 0;
        //cria tag Article com todos os elementos para o post
        this.post = document.createElement("ARTICLE");
        this.post.className = "article"
        this.title = document.createElement("H1");
        this.genre = document.createElement("H2");
        this.sinopse = document.createElement("P");
        this.image = document.createElement("IMG");

        //cria a div que vai contar os botões de like e deslike
        this.divReaction = document.createElement("DIV");
        this.divReaction.className = "feedback";

        //botão do like com o contador associado
        this.divLike = document.createElement("DIV");
        this.like = document.createElement("IMG");
        this.like.id = "like";
        this.like.src = "./images/icons/cinema.svg";
        this.like.addEventListener("click", this.pressLike);
        this.counterLike = document.createElement("P");
        this.counterLike.textContent = `${this.countLike}`;

        //botão do dislike com o contador associado
        this.divDislike = document.createElement("DIV");
        this.dislike = document.createElement("IMG");
        this.dislike.src = "./images/icons/triste.svg";
        this.dislike.alt = "dislike";
        this.dislike.addEventListener("click", this.pressDislike);
        this.counterDislike = document.createElement("p");
        this.counterDislike.textContent = `${this.countDislike}`;

        //Monta a estrutura de feedback

        this.divLike.appendChild(this.like);
        this.divLike.appendChild(this.counterLike);
        this.divDislike.appendChild(this.dislike);
        this.divDislike.appendChild(this.counterDislike);

        this.divReaction.appendChild(this.divLike);
        this.divReaction.appendChild(this.divDislike);
    }

    createPost(title, genre, sinopse, image){
        this.title.textContent = title;
        this.genre.textContent = genre;
        this.sinopse.textContent = sinopse;
        this.image.src = image;

        this.post.appendChild(this.title);
        this.post.appendChild(this.genre);
        this.post.appendChild(this.sinopse);
        this.post.appendChild(this.image);
        this.post.appendChild(this.divReaction);

        this.containerElement.appendChild(this.post);
    }

    pressLike(){
        this.countLike++;
        this.counterLike.textContent = `${this.countLike}`;
        this.like.className = "pressed";
        this.like.removeEventListener("click", this.pressLike);
        this.like.addEventListener("click", this.removeLike);
        this.dislike.removeEventListener("click", this.pressDislike);
    }

    pressDislike(){
        this.countDislike++;
        this.counterDislike.textContent = `${this.countDislike}`;
        this.dislike.className = "pressed";
        this.dislike.removeEventListener("click", this.pressDislike);
        this.dislike.addEventListener("click", this.removeDislike);
        this.like.removeEventListener("click", this.pressLike);
    }

    removeLike(){
        this.countLike--;
        this.counterLike.textContent = `${this.countLike}`;
        this.like.className = "";
        this.like.removeEventListener("click", this.removeLike);
        this.like.addEventListener("click", this.pressLike);
        this.dislike.addEventListener("click", this.pressDislike);
    }

    removeDislike(){
        this.countDislike--;
        this.counterDislike.textContent = `${this.countDislike}`;
        this.dislike.className = "";
        this.dislike.removeEventListener("click", this.removeDislike);
        this.dislike.addEventListener("click", this.pressDislike);
        this.like.addEventListener("click", this.pressLike);
    }

}