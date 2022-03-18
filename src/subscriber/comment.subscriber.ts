import { Comment } from '../entity/comment.entity';
import { Post } from "src/entity/post.entity";
import { EntitySubscriberInterface, EventSubscriber, InsertEvent, Repository } from "typeorm";

@EventSubscriber()
export class CommentSubscriber implements EntitySubscriberInterface<Comment>{
    listenTo(){
        return Comment
    }


    async afterInsert(event: InsertEvent<Comment>){
        console.log("lọt")
        const postRep : Repository<Post> = event.connection.manager.getRepository('post');
        console.log(postRep)
        const commentRep : Repository<Comment> = event.connection.manager.getRepository('comment');
        commentRep.count({where: { post: {id: event.entity.post.id} }})
        .then((count: number) => {
            postRep.update({id: event.entity.post.id}, {comments_num: count})
        })

    }
}