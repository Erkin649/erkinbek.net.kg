import React from 'react';
import './blog.css';

class Blog extends React.Component {
    render(){
        return(
            <section className="blog-post">
                <div className="blog">
                    <div className="date">
                        7 April 2020
                    </div>
                    <h2>This is my first blog</h2>
                        <p class="paragraph"> My name is Natalia. My surname is Govorova.
                        I am 15. I was born in 1982 in Chelyabinsk.I live in a small town
                         of Usinsk in the Komi Republic. My address is Flat 116, 19,
                            Pionerskaya Street. My phone number is 41-5-81. I am a pupil.
                             I go to school Number 1. I am a good pupil. I do well in all subjects.
                              They say that I am a hard-working person.To tell the truth, all school subjects 
                              come easy to me but sometimes I have to work long hours,for example, to do lessons
                               in Physics or Chemistry, to write a composition or to learn a poem by heart.
                                But my favourite subject is English. I spend a lot of 
                                time on it reading books, doing tests etc. 
                                Maybe English and learning it will be a part of my future carreer.</p> <br />
                        <p> I spend a lot of time on it reading books, doing tests
                                etc. Maybe English and learning it will be a part of my future carreer. I like reading. I think 
                                comics and detective stories are much easier to read but I prefer to read novels - 
                                historical or modern. I like music. My musical tastes are different, it depends on my mood.
                                But I think every apple is good in its season. I play the piano and the guitar,
                                    not seriously but for my soul. Sometimes I like to listen to Russian classical music.
                                    My favourite composers are Chaikovsky and Mozart.
                                    I also like Russian folk songs but I don't like rock music.</p><hr />
                        <p>I do well in all subjects. They say that I am a hard-working person.
                            To tell the truth, all school subjects come easy to me but sometimes I have to work long hours,
                                for example, to do lessons in Physics or Chemistry, to write a composition or to learn a poem by
                                heart. But my favourite subject is English. I spend a lot of time on it reading books, doing tests
                                etc. Maybe English and learning it will be a part of my future carreer. I like reading. I think 
                                comics and detective stories are much easier to read but I prefer to read novels - 
                                historical or modern. I like music. My musical tastes are different, it depends on my mood.
                                But I think every apple is good in its season. I play the piano and the guitar,
                                not seriously but for my soul. Sometimes I like to listen to Russian classical music.
                                My favourite composers are Chaikovsky and Mozart.
                                I also like Russian folk songs but I don't like rock music.</p>
                </div>
            </section>
        )
    }
}

export default Blog;