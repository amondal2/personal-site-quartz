import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Header: QuartzComponent = ({ cfg, ctx }: QuartzComponentProps) => {
    const basePath = ctx.argv.serve || !cfg.baseUrl
      ? ""
      : new URL(`https://${cfg.baseUrl}`).pathname.replace(/\/$/, "")

    return (
      <header>
        <img width="200px" src={`${basePath}/static/logo.svg`} alt="" />
        <h1><a href={basePath || "/"}>{cfg.pageTitle || "Home"}</a></h1>
        <nav class="site-nav">
          <a href={basePath || "/"}>Home</a>
          <a href={`${basePath}/posts/`}>Writing</a>
        </nav>
      </header>
    )
  }
  return Header
}) satisfies QuartzComponentConstructor