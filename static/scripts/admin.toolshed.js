"use strict";define(["mvc/toolshed/shed-list-view","mvc/toolshed/categories-view","mvc/toolshed/repositories-view","mvc/toolshed/repository-view","mvc/toolshed/repository-queue-view","mvc/toolshed/repo-status-view","mvc/toolshed/workflows-view"],function(e,o,t,i,a,s,r){var d=Backbone.Router.extend({initialize:function(){this.routesHit=0,Backbone.history.on("route",function(){this.routesHit++},this),this.bind("route",this.trackPageview)},routes:{"":"toolsheds",sheds:"toolsheds",queue:"queue",workflows:"workflows","status/r/:repositories":"status",status:"status","categories/s/:tool_shed":"categories","category/s/:tool_shed/c/:cateory_id":"repositories","repository/s/:tool_shed/r/:repository_id":"repository"},back:function(){this.routesHit>1?window.history.back():this.navigate("#",{trigger:!0,replace:!0})}});return{GalaxyApp:Backbone.View.extend({app_config:{known_views:["toolsheds","queue","status","categories","repositories","repoository"]},initialize:function(){Galaxy.admintoolshedapp=this,this.admin_toolshed_router=new d,this.admin_toolshed_router.on("route:queue",function(){Galaxy.admintoolshedapp.adminRepoQueueView?Galaxy.admintoolshedapp.adminRepoQueueView.reDraw():Galaxy.admintoolshedapp.adminRepoQueueView=new a.RepoQueueView}),this.admin_toolshed_router.on("route:toolsheds",function(){Galaxy.admintoolshedapp.adminShedListView?Galaxy.admintoolshedapp.adminShedListView.reDraw():Galaxy.admintoolshedapp.adminShedListView=new e.ShedListView}),this.admin_toolshed_router.on("route:categories",function(e){Galaxy.admintoolshedapp.adminShedCategoriesView?Galaxy.admintoolshedapp.adminShedCategoriesView.reDraw({tool_shed:e.replace(/\//g,"%2f")}):Galaxy.admintoolshedapp.adminShedCategoriesView=new o.CategoryView({tool_shed:e.replace(/\//g,"%2f")})}),this.admin_toolshed_router.on("route:repositories",function(e,o){Galaxy.admintoolshedapp.adminShedCategoryView?Galaxy.admintoolshedapp.adminShedCategoryView.reDraw({tool_shed:e.replace(/\//g,"%2f"),category_id:o}):Galaxy.admintoolshedapp.adminShedCategoryView=new t.Category({tool_shed:e.replace(/\//g,"%2f"),category_id:o})}),this.admin_toolshed_router.on("route:repository",function(e,o){Galaxy.admintoolshedapp.adminRepositoryView?Galaxy.admintoolshedapp.adminRepositoryView.reDraw({tool_shed:e.replace(/\//g,"%2f"),repository_id:o}):Galaxy.admintoolshedapp.adminRepositoryView=new i.RepoDetails({tool_shed:e.replace(/\//g,"%2f"),repository_id:o})}),this.admin_toolshed_router.on("route:status",function(e){Galaxy.admintoolshedapp.adminRepoStatusView?Galaxy.admintoolshedapp.adminRepoStatusView.reDraw({repositories:e.split("|")}):Galaxy.admintoolshedapp.adminRepoStatusView=new s.RepoStatus({repositories:e.split("|")})}),this.admin_toolshed_router.on("route:workflows",function(){Galaxy.admintoolshedapp.adminWorkflowsView?Galaxy.admintoolshedapp.adminWorkflowsView.reDraw():Galaxy.admintoolshedapp.adminWorkflowsView=new r.Workflows}),Backbone.history.start({pushState:!1})}})}});
//# sourceMappingURL=../maps/admin.toolshed.js.map