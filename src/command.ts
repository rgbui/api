

export class DbCommand {
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
     * data{User:{$id:"sss",name:'kankan'}}
     * data{User:{$id:['ss','sss'],...}}
     */
    update(data: Record<string, any[]>) {

    }
    /***
     * 执行删除
     * @param data
     * data:{User:{id:'sss'}}
     * data:{User:{id:['sss','gggg']}}
     */
    delete(data: Record<string, Object>) {

    }
}