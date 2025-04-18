# freiheit.com website generated with HUGO

Currently we have three systems:

## Swervers

### Live

- https://freiheit.com
- https://github.com/freiheit-com/freiheit-com.github.io

### Staging (currently CMS test)

This will soon be the live server and currently is connected to the new CMS tool

- https://freiheit-staging.ploigt.de
- https://github.com/show-dont-tell/freiheit-staging

### Old staging

This is for bigger updates, that Vahan and I use to not to interfer with live updates

- https://freiheit-com-staging.ploigt.de
- https://github.com/mploigt/freiheit/

## Editing Content

It is best done with help of the [customized CMS tool](https://github.com/mploigt/GitNote)
- Install prerequisites: https://github.com/mploigt/GitNote/releases/download/v1.2.6/GitNoteSetup.zip
- Install Application: https://github.com/mploigt/GitNote/releases

## Local development

### installing

- Install HUGO locally (https://gohugo.io/getting-started/installing/)
- Execute `npm install` in the root of this repository:

### run locally
    $ hugo server

## Live Deployment

Build the live site with the command

    $ hugo -e production

The files will be created inside the `docs` folder which is set as the root of the github pages root directory for hosing the site.

Just build the files and commit them to the master branch to deploy the new site.

IMPORTANT: Remember to set all files that you want to generate to `draft: false` in the head of a `.md` file

## Test Deployment to staging

Build the site with the command

    $ hugo -e staging

The files will be created inside the `docs` folder.

Just build the files and commit them to the master branch of the staging server to deploy.

The staging page can be accessed on <https://mploigt.github.io/freiheit>

### Netlify CMS (not yet implemented)

#### running locally

- run `npx netlify-cms-proxy-server` to start the proxy server
- run `hugo serve` to start the hugo server
- go to `http://localhost:1313/admin` to login to the CMS

## Live system

The content is delivered directly via the github pages with cloudflare CDN in front of it.

### Settings on github

The locally generated pages in the directory `/docs` are committed to the git main branch.
Its content is then delivered as a github page.

The settings for Github pages at
https://github.com/freiheit-com/freiheit-com.github.io/settings/pages are
blocked. It actually looks like Github pages are not active for the repository.
If changes need to be done, an organization admin has to grant the privilege
"Pages creation > Public" at
https://github.com/organizations/freiheit-com/settings/member_privileges.

For the pages to be delivered under their own domain, a file named CNAME must be created in the
repository in the toplevel with the name CNAME, which contains the external
contains the external domain name freiheit.com

This makes it possible that for requests with the host header freiheit.com the pages are delivered
are delivered. At the same time it prevents that the page is also delivered under
freiheit-com.github.io and thus prevents duplicate content.

Also, requests to www.freiheit.com are redirected to freiheit.com.
(This setting can also be seen under Settings -> Domain Name).


### Cloudflare

Cloudflare https://www.cloudflare.com is as reverse proxy cache in front of the github page and has the following tasks:

* Running the DNS servers for the freiheit.com zone.
* Providing a dedicated SSL certificate for the domain *.freiheit.com, freiheit.com
* Redirect from http to https
* Page rules for caching
* As a side effect cloudflare provides CDN caching and a DDOS protection for the website as well as the DNS servers

#### Page Rules in Cloudflare

    1) http://*freiheit.com/* Always Use HTTPS
    2) freiheit.com/*.html Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours
    3) freiheit.com/assets/images/* Browser Cache TTL: 8 days, Edge Cache TTL: 14 days
    4) freiheit.com/assets/fonts/* Browser Cache TTL: 8 days, Edge Cache TTL: 14 days
    5) freiheit.com/*.js Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours
    6) freiheit.com/*.css Browser Cache TTL: 2 hours, Edge Cache TTL: 4 hours

#### DNS Records für die Website in Cloudflare

    CNAME freiheit.com is an alias of freiheit-com.github.io
    CNAME www is an alias of freiheit-com.github.io


### convert images to webp

Install webp

    brew install webp

resize images

    (if you don't have install the imagemagick: brew install imagemagick)

    for file in * ; do convert -resize 50% "$file" "$file" ; done

convert images

    for file in * ; do cwebp "$file" -o "${file}.webp" ; done

convert and resize with cwebp excluding the image file extension:

    for file in * ; do cwebp "$file" -resize 1000 0 -o "${file%%.*}.webp" ; done
