import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Discover & Share
        <br  className="max-md:hidden"/>
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
< p className="desc text-center">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis molestiae eveniet nisi, exercitationem ducimus ut. 
    Assumenda consequuntur quis temporibus odio!
</p> 
</h1>
    {/* feed components */}
    <Feed/>
    </section>
  )
}

export default Home