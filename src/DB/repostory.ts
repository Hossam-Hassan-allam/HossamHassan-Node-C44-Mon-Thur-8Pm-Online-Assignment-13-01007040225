import { Model ,RootFilterQuery,ProjectionType,QueryOptions,UpdateQuery,UpdateWithAggregationPipeline} from "mongoose"
abstract class abstrctRepostory <T>{
    constructor(protected model:Model<T>){}
   async create(data:T){
       return await this.model.create(data)
    }
   async findone(filter:RootFilterQuery<T>,projection?: ProjectionType<T>,options?: QueryOptions<T>){
        return await this.model.findOne(filter,projection,options)
    }
   async findall(){
        return await this.model.find()  
    }
   async update(filter:RootFilterQuery<T>,update: UpdateWithAggregationPipeline | UpdateQuery<T>){
        return await this.model.updateOne(filter,update)
    }
   async delete(filter:RootFilterQuery<T>){
        return await this.model.deleteOne(filter)
    }
    
}
export default abstrctRepostory
