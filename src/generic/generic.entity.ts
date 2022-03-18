import { CreateDateColumn,UpdateDateColumn, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";

export class GenericEntity{
    @CreateDateColumn({default: () => 'CURRENT_TIMESTAMP', type: 'timestamp'})
    create_at: Date;
    @UpdateDateColumn({default: () => 'CURRENT_TIMESTAMP', type: 'timestamp'})
    update_at: Date;
}