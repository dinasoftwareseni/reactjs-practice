class ReapitArticle{
    id: string;
    title: string;
    publishAt: string;
    description: string;
    content: string;
    url: string;

    constructor(reapitarticleText:string){
        this.title = reapitarticleText;
        this.publishAt = reapitarticleText;
        this.description = reapitarticleText;
        this.content = reapitarticleText;
        this.url = reapitarticleText;
        this.id = new Date().toISOString();
    }
}

export default ReapitArticle;