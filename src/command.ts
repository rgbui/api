
/***
 * 相关的api 参考 https://github.com/Tencent/APIJSON/blob/master/Document.md
 * 
 */
export class DbCommand {
    /**
     * 
     * @param data 
     * {User:{id:'xxx'}}
     * {User[]:{
     * page:number,
     * count:number,
     * User:{id:'xxxx'}
     * }
     * }
     */
    get(data: Record<string, Object>) {

    }
    /**
     * 插入数据
     * @param data 
     * data{User:{name:'',sex:true}}
     * data{User:[{name:'',sex:true}],Comment:[{name:'xxx',g:'sss'}]}
     * 
     */
    insert(data: Record<string, any[] | Object>) {

    }
    /**
     * 更新数据
     * $id表示当前更新的主键，可以是一个值，也可以是数组，
     * 这里不支持带有条件的更新数据（实际上是先按条件查询，然估在收集Id执行更新）
     * @param data 
     * data{User:{$key:"sss",name:'kankan'}}
     * data{User:{$key:['ss','sss'],...}}
     */
    update(data: Record<string, any[]>) {

    }
    /***
     * 执行删除
     * @param data
     * data:{User:{$key:'sss'}}
     * data:{User:{$key:['sss','gggg']}}
     */
    delete(data: Record<string, Object>) {

    }
}