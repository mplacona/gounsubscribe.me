require 'rubygems'
require 'json'
require 'haml'
require 'sinatra/base'
require 'sinatra/assetpack'
require 'sinatra'

class Application < Sinatra::Base
    set :root, File.dirname(__FILE__)
    register Sinatra::AssetPack

    configure do
        set :views, "#{File.dirname(__FILE__)}/views"
        set :count, JSON.parse(IO.read("urls.json")).count
    end

    
    assets {
        js :app, '/js/app.js', [
            '/js/vendor/jquery.js',
            '/js/vendor/*.js',
            '/js/*.js'
        ]
        
        css :application, '/css/application.css', [
            '/css/vendor/*.css',
            '/css/*.css'
           
        ]

        js_compression  :jsmin
        css_compression :simple
    }

    get '/' do
        haml :index
    end

    get '/about' do
        haml :about
    end
    
    get '/contact' do
        haml :contact
    end

    not_found do
        haml :'404'
    end

    run! if app_file == $0
end
