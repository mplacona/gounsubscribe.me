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
    end

    
    assets {
        js :app, '/js/app.js', [
            '/js/*.js'
        ]
        
        css :application, '/css/application.css', [
            '/css/*.css',
            '/css/vendor/*.css'
        ]

        js_compression  :jsmin
        css_compression :simple
    }

    get '/' do
        haml :index
    end

    not_found do
        haml :'404'
    end

    run! if app_file == $0
end
