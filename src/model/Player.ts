export class PlayerL{
    img:string;
    teamImg:string;
    constructor(
        public id:number,
        public rank:number,
        public player:string,
        public team:string,
        public reb:number,
        public ast:number,
        public stl:number,
        public blk:number,
        public pts:number
    ){
        this.img="";
        this.teamImg="";
    }

    public setImg(img){
        this.img=img;
    }

    public setTeamImg(img){
        this.teamImg=img;
    }
}