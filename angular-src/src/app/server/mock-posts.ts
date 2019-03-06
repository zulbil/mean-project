import { Post } from '../models/post';

export const POSTS: Post [] = [
  {
    id: 1,
    published_at: Date(),
    title: "My firtst post",
    likes: 150,
    dislikes: 50,
    comments: 10,
    views: 25,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
    media: "../../assets/images/claims.jpg"
  },
  {
    id: 2,
    published_at: Date(),
    title: "My firtst post",
    likes: 150,
    dislikes: 50,
    comments: 10,
    views: 25,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
    media: "../../assets/images/guillermo-alvarez.jpg"
  },
  {
    id: 3,
    published_at: Date(),
    title: "My firtst post",
    likes: 150,
    dislikes: 50,
    comments: 10,
    views: 25,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
    media: "../../assets/images/lalo-hernandez.jpg"
  },
  {
    id: 1,
    published_at: Date(),
    title: "My firtst post",
    likes: 150,
    dislikes: 10,
    comments: 10,
    views: 25,
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce luctus vehicula tellus ac placerat",
    media: "../../assets/images/neil-iris.jpg"
  }
];
