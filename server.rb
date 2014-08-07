require 'sinatra'
require 'yelp'
require 'sinatra/partial'

class Yelpy < Sinatra::Base

	set :views, Proc.new { File.join(root, "views") }
	set :public_folder, Proc.new { File.join(root, "public") }
register Sinatra::Partial
	get '/' do

		client = Yelp::Client.new({ consumer_key: "87W8_iswak1PkyuVaW3Hdg",
                            consumer_secret: "eMxki9ls2zG7OsZOKgQJ6gjJYeA",
                            token: "ldMcpmVFzYRsRYXTnOsHoawDx9maluHA",
                            token_secret: "KooVySQkDcxxrB4RFSfPqXK4t-8"
                          })

		if params[:search]
			@results = client.search('london', term: params[:search]).businesses.to_json
		end

    erb :index
  end

  get '/geocoder' do
    erb :geocoder
  end

  # start the server if ruby file executed directly
  run! if app_file == $0


end