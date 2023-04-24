/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Entity base
@Entity()
export class PostMessageEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column("text", {
    default: "user",
    nullable: true
  })
  readonly user: string;

  @Column()
  readonly title: string;

  @Column()
  content: string;

  @Column("text", {
    array: true,
    default: [],
    nullable: true
  })
  comments?: string[];

  @Column("text", {
    array: true,
    default: [],
    nullable: true
  })
  reactions?: string[];

  @Column({
    type: "timestamptz",
    default: "NOW",
    nullable: true
  })
  createdAt?: Date;

  constructor(
    id: string,
    user: string,
    title: string,
    content: string,
    comments: string[],
    reactions: string[],
    createdAt: Date
  ) {
    this.id = id;
    this.user = user;
    this.title = title;
    this.content = content;
    this.comments = comments;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }
}

// Reactions entity
@Entity()
export class PostReactionEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column("text", {
    nullable: true
  })
  user? = this.id;

  @Column("text", {
    array: true,
    nullable: true
  })
  reactions?: [
    {
      reaction?: string;
      author?: string;
    }
  ];

  @Column({
    type: "timestamptz",
    default: "NOW",
    nullable: true
  })
  createdAt?: Date;

  constructor(id: string, user: string, reactions: [{ reaction?: string; author?: string }], createdAt: Date) {
    this.id = id;
    this.user = user;
    this.reactions = reactions;
    this.createdAt = createdAt;
  }
}

// Comments entity
@Entity()
export class PostCommentEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column("text", {
    nullable: true
  })
  user? = this.id;

  @Column("text", {
    array: true,
    nullable: true
  })
  comments?: [
    {
      comment?: string;
      author?: string;
    }
  ];

  @Column({
    type: "timestamptz",
    default: "NOW",
    nullable: true
  })
  createdAt?: Date;

  constructor(id: string, user: string, comments: [{ comment?: string; author?: string }], createdAt: Date) {
    this.id = id;
    this.user = user;
    this.comments = comments;
    this.createdAt = createdAt;
  }
}
