/**
 * Javascript file that will use the information in
 * scripts/projects.json to build the project tiles
 * in index.html
 */

let template = `<div class="col-lg-4 col-sm-6 col-xs-12">
  <div class="project-box" id="PROJECT_ID">
    <span id="PROJECT_ANCHOR" class="project-anchor"></span>
    <div class="project-image">
      <img src="PROJECT_IMG" class="img-responsive"  alt="PROJECT_ID">
    </div>
    <div class="project-box-description">
      <div class="project-box-text">
        <div class="project-name">
          PROJECT_TITLE
        </div>
        <div class="project-description">
          PROJECT_DESCRIPTION
        </div>
        <div class="project-icons">
          <a href="#details" class="project-details">
            <i class="fa fa-commenting-o" aria-hidden="true"></i>
          </a> 
          <a href="PROJECT_GITHUB" target="_blank" alt="PROJECT_GITHUB">
            <i class="fa fa-github" aria-hidden="true"></i>
          </a> 
          <a href="PROJECT_DEMO" target="_blank" alt="PROJECT_DEMO">
            <i class="fa fa-television" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;


