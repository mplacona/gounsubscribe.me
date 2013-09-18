require 'rubygems'
require 'json'

jsonConfig = "urls.json"

# Open JSON file for parsing
haml = ""
json_text = JSON.parse(IO.read(jsonConfig))
sorted_object = json_text.sort_by {|e| e["name"].downcase}    

sorted_object.each do |item|
    haml +=<<-EOF
%div{:class=>"col-12 col-sm-6 col-lg-4"}
    %h2{:id=>"#{item["name"].downcase.gsub(/[^ 0-9a-z]/, '').gsub(/\s+/, '-')}"}
        #{item["name"]}
    %p
        
        %div{:class=>"col-lg-9"}
            %input{:type=>"text", :class=>"form-control", :id=>"disabledInput", :value=>"#{item["url"]}", :disabled=>"disabled"}
        %button{:type=>"button", :onclick => "openLink('#{item["url"]}')", :class=>"btn btn-default"} open
    EOF
end
indexFile = "views/index.haml"
if File.exist?(indexFile)
    File.delete(indexFile)
end
File.open(indexFile, "a+") { |f| f.write(haml) }

