class ReapitArticle{
    id: string;
    title: string;
    publishAt: string;
    description: string;
    content: string;
    url: string;

    constructor(obj:{reapitarticleTitle:string,reapitarticlePublishAt:string,reapitarticleDescription:string,reapitarticleContent:string,reapitarticleUrl:string}){
        this.title = obj.reapitarticleTitle;
        this.publishAt = obj.reapitarticlePublishAt;
        this.description = obj.reapitarticleDescription;
        this.content = obj.reapitarticleContent;
        this.url = obj.reapitarticleUrl;
        this.id = new Date().toISOString();
    }
}

export default ReapitArticle;