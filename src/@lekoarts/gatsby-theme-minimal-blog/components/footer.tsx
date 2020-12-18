/** @jsx jsx */
import { jsx, Link, Box, Button, Input } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"
import React from "react"

const Footer = () => {
  const { siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div style={{flexBasis: '100%', marginBottom: '12px'}}>
        <Box as='form' action="https://formspree.io/f/mnqogeqr" method="POST">
          <Input placeholder="Get updates by email" style={{display: 'inline', maxWidth: '280px', marginRight: '8px', marginBottom: '8px'}} type="email" name="email" />
          <Button style={{backgroundColor: 'black'}}>Sign up</Button>
        </Box>
      </div>
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}. Licensed under CC0. No Rights Reserved.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Link>
        {` `}
        by
        {` `}
        <Link aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
