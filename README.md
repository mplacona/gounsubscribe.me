GoUnsubscribe.me
================

A collaborative service that provides users with URL's to unsubscribe from online services

## Contributing
The URL's are stored on the file urls.json. I want it to be easy for you to contribute. You will then add the following information:

- `name`: The name of the website
- `url`: The url where you would go if you were unsubscribing from a website

1. Fork this repository, add one site detail at a time to `urls.json`
2. Run `bundle install`
3. Run `ruby generator.rb`
4. Check by running `ruby application.rb`
5. Commit and make a pull request

## Disclaimer
The design sucks and I know it, but I'd rather leave it to the creativity of a colaborator.
This is a colaboration project, so the more the merrier, so let put this to work and add more functionalities

## Demo
![gif](https://raw.github.com/mplacona/gounsubscribe.me/master/public/images/gounsubscribe.gif)

## Acknowledgements
The original idea for this project came to me after seeing [justdelete.me](http://justdelete.me), which I thought was simple and cool.

I didn't want to simply make a copy of it, as there would just be no point, so thought I'd create something that would work similarly... but in a different way :-)
