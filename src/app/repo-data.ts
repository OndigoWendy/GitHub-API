export class RepoData {
  constructor(
    public name: string,
    public html_url:string,
    public description:string,
    public language:string, 
    public created_at:Date,
    public clone_url:string)
    {}
}
