import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Header: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
    return (
      <header>
        {/* Placeholder logo — replace the div below with an <img src="/static/logo.svg" alt="" /> once your logo is ready */}
        <img width="200px" src="/static/logo.svg" alt="" /> 
        <h1><a href="/">{cfg.pageTitle || "Home"}</a></h1>
        <nav class="site-nav">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/posts">Writing</a>
        </nav>
      </header>
    )
  }
  return Header
}) satisfies QuartzComponentConstructor