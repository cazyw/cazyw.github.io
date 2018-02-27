#!/usr/bin/ruby
puts "=" * 20
puts "Start ruby script"
puts "=" * 20

projects = []



# <div class="col-lg-4 col-sm-6 col-xs-12">
#           <div class="project-box" id="jsspotify">
#             <span id="jsspotify-anchor" class="project-anchor"></span>
#             <div class="project-image">
#               <img src="img/js-spotify.jpg" class="img-responsive"  alt="jsspotify">
#             </div>
#             <div class="project-box-description">
#               <div class="project-box-text">
#                 <div class="project-name">
#                   Spotify Playlist Backup
#                 </div>
#                 <div class="project-description">
#                   Download track details from your playlists
#                 </div>
#                 <div class="project-icons">
#                   <a href="#details" class="project-details">
#                     <i class="fa fa-commenting-o" aria-hidden="true"></i>
#                   </a> 
#                   <a href="https://github.com/cazyw/spotify-playlist-backup" target="_blank" alt="https://github.com/cazyw/spotify-playlist-backup">
#                     <i class="fa fa-github" aria-hidden="true"></i>
#                   </a> 
#                   <a href="https://spotify-playlist-backup.herokuapp.com/" target="_blank" alt="https://spotify-playlist-backup.herokuapp.com/">
#                     <i class="fa fa-television" aria-hidden="true"></i>
#                   </a>
#                 </div>
#               </div>
#             </div>
#           </div>
#         </div>

proj_id = /<div class="project-box" id="(?<project_id>\w+)">/
proj_anchor = /<span id="(?<project_anchor>.+)" class="project-anchor">/
proj_img = /<img src="(?<project_img>.+)" class="img-responsive"/
proj_title = /<div class="project-name">/
proj_description = /<div class="project-description">/
proj_github = /<i class="fa fa-github" aria-hidden="true">/
proj_html = /<a href="(?<project_html>.+?)"/
proj_demo = /<i class="fa fa-television" aria-hidden="true">/

File.open("../index.html") do |file|
  lines = file.readlines
  lines.each_with_index do |line, index|
    if (pid = line.match(proj_id))
      puts "Project id: #{pid['project_id']}"
    elsif (pid = line.match(proj_anchor))
      puts "\tProject anchor: #{pid['project_anchor']}"
    elsif (pid = line.match(proj_img))
      puts "\tProject image: #{pid['project_img']}"
    elsif (pid = line.match(proj_title))
      puts "\tProject title: #{lines[index+1].strip}"
    elsif (pid = line.match(proj_description))
      puts "\tProject description: #{lines[index+1].strip}"
    elsif (pid = line.match(proj_github))
      pid = lines[index-1].match(proj_html)
      puts "\tProject Github link: #{pid['project_html']}"
    elsif (pid = line.match(proj_demo))
      pid = lines[index-1].match(proj_html)
      puts "\tProject Demo website: #{pid['project_html']}"
    end
  end

end