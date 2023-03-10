import { randomUUID } from "node:crypto";
import { Replace } from "src/helpers/Replace";
import { Content } from "./content";

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null
  canceledAt?: Date | null
  createdAt: Date
}

export class Notification {
  private props: NotificationProps
  private _id: string

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._id = randomUUID()
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    }
  }

  public get id(): string {
    return this._id
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }

  public get recipientId(): string {
    return this.props.recipientId
  }

  public set content(content: Content) {
    this.props.content = content
  }

  public get content(): Content {
    return this.props.content
  }

  public set category(category: string) {
    this.props.category = category
  }

  public get category(): string {
    return this.props.category
  }
  public set readAt(readAt: Date | null) {
    this.props.readAt = readAt
  }

  public get readAt(): Date | null {
    return this.props.readAt
  }

  public cancelAt() {
    this.props.canceledAt = new Date()
  }

  public get canceledAt(): Date | null {
    return this.props.canceledAt
  }

  public get createdAt(): Date {
    return this.props.createdAt
  }
}