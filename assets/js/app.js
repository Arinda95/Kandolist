/* main */
main = new Vue({
    el: "#ao",
    data: {
        appData: {
            /* Application Usage Data */
            usageStats: {
                firstUsage: ""
            },
            /* User Preference */
            userPrefs:{
                saveLocation: "",
                soundDefault: true,
                soundOnSettings: ''
            },
            /* Application Statistcs */
            appStats: {
                currentVersion: "",
                updateAvailable: "",
                availableUpdateVersion: "",
                availableUpdateVersionImprovements: ""
            },
            /* Digital Rights Management */
            drm: {
                license: "",
                status: ""
            },
            /* Deep Work Settings */
            deepWorkDefaults: {
                longWorkSession: 45,
                longBreakTime: 15,
                shortWorkSession: 25,
                shortBreakTime: 5
            },
            deepWorkSettings: {
                longWorkSession: '',
                longBreakTime: '',
                shortWorkSession: '',
                shortBreakTime: ''
            }
        },
        projects: [],
        projects2: [],
        projectsb: [],
        recentlyOpened: [],
        recentlyOpenedDirs: [],
        projectViewTitle: "",
        projectViewDescription: "",
        projectViewFromDate: "",
        projectViewDeadline: "",
        saveNeeded: true,
        settings: "",
        activeHelpView: 1,
        opTemp: {
            userCtrls:{
                maxState: 1,
                activeView: 'projectorganizer',
                activeProjectsView: 'catalogue'
            },
            deepWorkDataDetails:{
                longWorkSession: '',
                longBreakTime: '',
                shortWorkSession: '',
                shortBreakTime: ''
            },
            projectDetails: {
                showErrMessage: false,
                errMessage: "",
                title: "",
                description: "",
                fromDate: "",
                deadline: ""
            },
            projectUpdateDetails: {
                showErrMessage: false,
                errMessage: "",
                title: "",
                description: "",
                fromDate: "",
                deadline: ""
            },
            showlgess: true,
            showshsess: true,
            showres: false,
            activeWorkFlowIndex: "",
            activeProjectViewIndex: "",
            activeProjectUpdateIndex: "",
            activeProjectDeleteIndex: "",
            activeProjectDeleteTitle: "",
            activeProjectDownloadIndex: "",
            activeProjectDownloadError: "",
            fileDownloadName: "",
            taskDetails: {
                showErrMessage: false,
                errMessage: "",
                description: "",
                deadline: ""
            },
            taskUpdateDetails: {
                showErrMessage: false,
                errMessage: "",
                description: "",
                deadline: ""
            },
            activeTaskViewIndex: "",
            activeTaskViewStage: "",
            activeTaskDeleteIndex: "",
            activeTaskDeleteDescription: "",
            activeTaskDeleteDeadline: "",
            activeViewDescription: "",
            activeViewDeadline: "",
            internetAccess: "",

        }
    },
    methods: {
        humanReadableIndex: function(index){
            return index+1;
        },
        nullCheck: function(val){
            if(val === "" || val === null){ return true; }
            else { return false; }
        },
        nullCheck2: function(val){
            if(val === "" || val === "Not set" || val === null){ return true; }
            else { return false; }
        },
        numCheck: function(val){
            return !isNaN(val);
        },
        dateCheck: function(val){
            var dateType = /^(\d{1,2})([\/-])(\d{1,2})\2(\d{4})/;
            var isMatch = dateType.test(val);
            if(isMatch){
                return true;
            }
            else{
                return false;
            }
        },

        /* sound controls */
        toogleSound: function(){
            //turn sound on or off
            if(this.appData.userPrefs.soundOnSettings === true){
                this.appData.userPrefs.soundOnSettings = false;
            }
            else if(this.appData.userPrefs.soundOnSettings === false){
                this.appData.userPrefs.soundOnSettings = true;
            }
        },

        /* id gen */
        generateUUId: function(){
            var dt = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                var r = (dt + Math.random()*16)%16 | 0;
                dt = Math.floor(dt/16);
                return (c=='x' ? r :(r&0x3|0x8)).toString(16)
            });
            return uuid;
        },
        generateProjectId: function(){
            let code = "proj-";
            return code + this.generateUUId();
        },
        generateTaskId: function(){
            let code = "task-";
            return code + this.generateUUId();
        },
        generatePackId: function(){
            let code = "pack-";
            return code + this.generateUUId();
        },
        showGif: function(viewNum){
            viewNum = parseInt(viewNum);
            this.activeHelpView = null;
            this.activeHelpView = viewNum;
            if (this.activeHelpView === 1){
                $("#one").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 2){
                $("#two").addClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 3){
                $("#three").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 4){
                $("#four").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 5){
                $("#five").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 6){
                $("#six").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 7){
                $("#seven").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 8){
                $("#eight").addClass("infoclicked")
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 9){
                $("#nine").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 10){
                $("#ten").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 11){
                $("#eleven").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 12){
                $("#twelve").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#thirteen").removeClass("infoclicked");
            }
            if (this.activeHelpView === 13){
                $("#thirteen").addClass("infoclicked");
                $("#two").removeClass("infoclicked");
                $("#three").removeClass("infoclicked");
                $("#four").removeClass("infoclicked");
                $("#five").removeClass("infoclicked");
                $("#six").removeClass("infoclicked");
                $("#seven").removeClass("infoclicked");
                $("#eight").removeClass("infoclicked");
                $("#nine").removeClass("infoclicked");
                $("#ten").removeClass("infoclicked");
                $("#eleven").removeClass("infoclicked");
                $("#one").removeClass("infoclicked");
                $("#twelve").removeClass("infoclicked");
            }
        },

        /* Project creator */
        closeIntroModal: function(){
            $("#introModal").modal("hide");
        },
        openAbout: function(){
            $("#aboutModal").modal("show");
        },
        openSellfy: function(){
            require('nw.gui').Shell.openExternal("https://sellfy.com/shinobi-applications/");
        },
        neverShowIntroModalAgain: function(){
            $("#introModal").modal("hide");
            this.settings.showOpeningModal = false;
            var fs = require('fs');
            const homedir = require('os').homedir();
            var savedir = homedir+'/.kanDoList';
            var savefile = savedir+"/settings.kdl";
            fs.writeFileSync(savefile, JSON.stringify(this.settings), function(err){});
        },
        startCreator: function(){
            $('#projectCreatorModal').modal('show');
        },
        createProject: function(){
            var dir = this.opTemp.projectDetails;
            dir.fromDate = $("#fromDate").val();
            dir.deadline = $("#deadline").val();
            //nullchecks
            if(this.nullCheck(dir.title)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a title";
                return;
            }
            if(this.nullCheck(dir.description)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a description";
                return;
            }
            if(!this.nullCheck2(dir.fromDate)){
                if(!this.dateCheck(dir.fromDate)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper starting date";
                    return;
                }
                else{/*pass*/}
            }
            if(!this.nullCheck2(dir.deadline)){
                if(!this.dateCheck(dir.deadline)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper deadline";
                    return;
                }
                else{/*pass*/}
            }
            if(this.nullCheck(dir.fromDate)){
                dir.fromDate = "Not set";
            }
            if(this.nullCheck(dir.deadline)){
                dir.deadline = "Not set";
            }
            dir.showErrMessage = false;
            dir.errMessage = null;
            var id = this.generateProjectId();
            var newProject = {
                "_id": id,
                "title": dir.title,
                "description": dir.description,
                "fromDate": dir.fromDate,
                "deadline": dir.deadline,
                "fileLoc": require('os').homedir()+"\\Documents\\KanDoList\\"+dir.title+".kdl",
                todo: [],
                beingWorkedOn: [],
                doubleChecking: [],
                finished: []
            }
            this.projects.unshift(newProject);
            var chooser = $('#fileDownload');
            chooser.unbind('change');
            chooser.attr("nwsaveas", null);
            chooser.val("");
            chooser.attr("nwworkingdir", require('os').homedir()+"\\Documents\\KanDoList");
            chooser.attr("nwsaveas", newProject.title+".kdl");
            var _this = this;
            chooser.change(function(evt){
                var windir = $(this).val();
                var fs = require('fs');
                fs.writeFileSync(windir, JSON.stringify(newProject), function(err) {
                    if(err) {
                        $('#fileDownloadErrorModal').modal('show');
                        _this.opTemp.activePRojectDownloadError = null;
                        _this.opTemp.activePRojectDownloadError = err;
                    }
                });
                _this.recentlyOpenedDirs.unshift(windir);
                var savedir = require('os').homedir()+"\\.KanDoList\\recent.kdl";
                fs.writeFileSync(savedir, JSON.stringify(_this.recentlyOpenedDirs), function(err){});
            });
            chooser.trigger('click');
            /* clear */
            dir.title = null;
            dir.description = null;
            dir.fromDate = null;
            dir.deadline = null;
            $("#fromDate").val("");
            $("#deadline").val("");
            $('#projectCreatorModal').modal('hide');

        },

        updateProjectFile: function(index){
            var file = this.projects[index];
            var fileLoc = file.fileLoc;
            this.saveNeeded = true;
            var fs = require('fs');
            fs.writeFileSync(fileLoc, JSON.stringify(file), function(err) {if(err){}});
        },

        updateProjectFile2: function(index){
            var file = this.projects[index];
            var fileLoc = file.fileLoc;
            this.saveNeeded = true;
            var fs = require('fs');
            fs.writeFileSync(fileLoc, JSON.stringify(file), function(err) {if(err){}});
            $("#saveReminderModal").modal('hide');
            $("#saveReminderModal2").modal('hide');
            this.opTemp.userCtrls.activeProjectsView = null;
            this.opTemp.userCtrls.activeProjectsView = "catalogue";
        },

        uploadFile: function(){
            var chooser = $('#fileUpload');
            var fs = require('fs');
            var _this = this;
            chooser.attr("nwworkingdir", require('os').homedir()+"\\Documents\\KanDoList");
            chooser.change(function(evt){
                var files = $(this)[0].files;
                for (var i = 0; i < files.length; ++i){
                    var project = JSON.parse(fs.readFileSync(files[i].path, "utf-8"));
                    project.fileLoc = files[i].path;
                    _this.recentlyOpenedDirs.unshift(files[i].path);
                    var savedir = require('os').homedir()+"\\.KanDoList\\recent.kdl";
                    fs.writeFileSync(savedir, JSON.stringify(_this.recentlyOpenedDirs), function(err){});
                    _this.projects.unshift(project);
                }
            });
            chooser.trigger('click');
        },

        startProjectUpdator: function(index){
            $('#previewProjectDetailsModal').modal('hide');
            $('#projectUpdatorModal').modal('show');
            this.opTemp.activeProjectUpdateIndex = index;
            var dir = this.opTemp.projectUpdateDetails;
            var temp = this.projects[this.opTemp.activeProjectUpdateIndex];
            dir.title = temp.title;
            dir.description = temp.description;
            dir.fromDate = temp.fromDate;
            dir.deadline = temp.deadline;
        },
        startProjectUpdator2: function(index){
            $('#previewProjectDetailsModal').modal('hide');
            $('#projectUpdatorModal').modal('show');
            this.projects.unshift(this.recentlyOpened[index]);
            var dir = this.opTemp.projectUpdateDetails;
            var temp = this.projects[0];
            dir.title = temp.title;
            dir.description = temp.description;
            dir.fromDate = temp.fromDate;
            dir.deadline = temp.deadline;
        },
        updateProject: function(){
            var dir = this.opTemp.projectUpdateDetails;
            var prevdir = this.projects[this.opTemp.activeProjectUpdateIndex];
            dir.fromDate = $("#projectUpdateFromDate").val();
            dir.deadline = $("#projectUpdateDeadline").val();
            //nullchecks
            if(this.nullCheck(dir.title)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a title";
                return;
            }
            if(this.nullCheck(dir.description)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a description";
                return;
            }
            if(!this.nullCheck2(dir.fromDate)){
                if(!this.dateCheck(dir.fromDate)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper starting date";
                    return;
                }
                else{/*pass*/}
            }
            if(!this.nullCheck2(dir.deadline)){
                if(!this.dateCheck(dir.deadline)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper deadline";
                    return;
                }
                else{/*pass*/}
            }
            if(this.nullCheck(dir.fromDate)){
                dir.fromDate = "Not set";
            }
            if(this.nullCheck(dir.deadline)){
                dir.deadline = "Not set";
            }
            dir.showErrMessage = false;
            dir.errMessage = null;

            var upd = this.projects[this.opTemp.activeProjectUpdateIndex];
            upd.title = dir.title;
            upd.description = dir.description;
            upd.fromDate = dir.fromDate;
            upd.deadline = dir.deadline;
            upd.fileLoc = prevdir.fileLoc;
            upd.todo = prevdir.todo;
            upd.beingWorkedOn = prevdir.beingWorkedOn;
            upd.doubleChecking = prevdir.doubleChecking;
            upd.finished = prevdir.finished;
            this.updateProjectFile(this.opTemp.activeProjectUpdateIndex);
            /* clear */
            dir.title = null;
            dir.description = null;
            dir.fromDate = null;
            dir.deadline = null;
            $("#projectUpdateFromDate").val("");
            $("#projectUpdateDeadline").val("");
            $('#projectUpdatorModal').modal('hide');
            this.opTemp.activeProjectUpdateIndex = null;
        },
        deleteCheck: function(index){
            $('#previewProjectDetailsModal').modal('hide');
            $('#deleteProjectConsentModal').modal('show');
            this.opTemp.activeProjectDeleteIndex = index;
            this.opTemp.activeProjectDeleteTitle = this.projects[this.opTemp.activeProjectDeleteIndex].title;
        },
        deleteProject: function(){
            this.projects.splice([this.opTemp.activeProjectUpdateIndex], 1);
            $('#deleteProjectConsentModal').modal('hide');
        },

        gotoshinobi: function(){
            window.open("https://sellfy.com/shinobi-applications/");
        },

        /*Helper Modal*/
        openHelperModal1: function(){
            $('#mainHelperModal').modal('show');
        },
        openHelperModal2: function(){
            $('#mainHelperModal').modal('show');
        },
        openHelperModal3: function(){
            $('#mainHelperModal').modal('show');
        },

        /* update modal */
        openLicenseModal: function(){
            $('#licenseModal').modal('show');
        },

        /* license modal */
        openUpdateModal: function(){
            $('#updateModal').modal('show');
        },

        /* Catalogue to board */
        catalogueToWorkFlow: function(index){
            this.projects = this.projects;
            this.opTemp.projectViewIndex = null;
            this.opTemp.userCtrls.activeProjectsView = null;
            this.opTemp.userCtrls.activeProjectsView = "boardsView";
            this.opTemp.activeWorkFlowIndex = index;
        },
        catalogueToWorkFlow2: function(index){
            this.projectsb = this.projects;
            this.projects = this.projects2;
            this.opTemp.projectViewIndex = null;
            this.opTemp.userCtrls.activeProjectsView = null;
            this.opTemp.userCtrls.activeProjectsView = "boardsView2";
            this.opTemp.activeWorkFlowIndex = index;
        },
        catalogueToWorkFlow3: function(index){
            this.projects = this.projects;
            this.projects.unshift(this.recentlyOpened[index]);
            this.opTemp.projectViewIndex = null;
            this.opTemp.userCtrls.activeProjectsView = null;
            this.opTemp.userCtrls.activeProjectsView = "boardsView";
            this.opTemp.activeWorkFlowIndex = 0;
        },
        workFlowToCatalogue: function(){
            if(this.saveNeeded === false){
                $("#saveReminderModal").modal('show');
            }
            else if(this.saveNeeded === true){
                this.opTemp.userCtrls.activeProjectsView = null;
                this.opTemp.userCtrls.activeProjectsView = "catalogue";
            }
        },
        workFlowToCatalogue2: function(){
            this.projects = null;
            this.projects = this.projectsb;
            this.opTemp.userCtrls.activeProjectsView = null;
            this.opTemp.userCtrls.activeProjectsView = "catalogue";
            this.saveNeeded = true;
        },
        showAnswer: function(index){
            this.answer = this.questions[index].answer;
        },

        /* kanban board */
        openTaskViewModal: function(index, stage){
            $('#taskViewModal').modal('show');
            this.opTemp.activeTaskViewIndex = index;
            this.opTemp.activeTaskViewStage = stage;
            this.opTemp.activeViewDescription = this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage][this.opTemp.activeTaskViewIndex].description;
            this.opTemp.activeViewDeadline = this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage][this.opTemp.activeTaskViewIndex].deadline;
        },
        openUpdateTaskModal: function(){
            $('#taskViewModal').modal('hide');
            $('#updateTaskModal').modal('show');
            var dir = this.opTemp.taskUpdateDetails;
            var temp = this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage][this.opTemp.activeTaskViewIndex];
            dir.description = temp.description;
            dir.deadline = temp.deadline;
        },
        updateTask: function(){
            var dir = this.opTemp.taskUpdateDetails;
            dir.deadline = $("#taskUpdateDeadline").val();
            //nullchecks
            if(this.nullCheck(dir.description)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a description";
                return;
            }
            if(!this.nullCheck2(dir.deadline)){
                if(!this.dateCheck(dir.deadline)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper deadline";
                    return;
                }
                else{/*pass*/}
            }
            if(this.nullCheck2(dir.deadline)){
                dir.deadline = "Not set";
            }
            dir.showErrMessage = false;
            dir.errMessage = null;
            var id = this.generateProjectId();
            var newTask = {
                "_id": id,
                "description": dir.description,
                "deadline": dir.deadline
            }
            this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage].splice([this.opTemp.activeTaskViewIndex], 1);
            this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage].unshift(newTask);
            this.opTemp.activeTaskViewIndex = null;
            this.opTemp.activeTaskViewStage = null;
            /* clear */
            dir.description = null;
            dir.deadline = null;
            $("#taskUpdateDeadline").val("");
            $('#updateTaskModal').modal('hide');
            this.saveNeeded = false;
        },
        openAddNewTaskModal: function(){
            $('#addNewTaskModal').modal('show');
        },
        createNewTask: function(){
            var dir = this.opTemp.taskDetails;
            dir.deadline = $("#taskDeadline").val();
            if(this.nullCheck2(dir.description)){
                dir.showErrMessage = true;
                dir.errMessage = "Please provide a description";
                return;
            }
            if(!this.nullCheck2(dir.deadline)){
                if(!this.dateCheck(dir.deadline)){
                    dir.showErrMessage = true;
                    dir.errMessage = "Please provide a proper deadline";
                    return;
                }
                else{/*pass*/}
            }
            if(this.nullCheck(dir.deadline)){
                dir.deadline = "Not set";
            }
            dir.showErrMessage = false;
            dir.errMessage = null;
            var id = this.generateTaskId();
            var newTask = {
                "_id": id,
                "description": dir.description,
                "deadline": dir.deadline
            }
            this.projects[this.opTemp.activeWorkFlowIndex].todo.unshift(newTask);
            /* clear */
            dir.description = null;
            dir.deadline = null;
            $("#taskDeadline").val("");
            $('#addNewTaskModal').modal('hide');
            this.saveNeeded = false;
        },
        openDeleteTaskConsentModal: function(index, stage){
            $('#deleteTaskConsentModal').modal('show');
            this.opTemp.activeTaskViewIndex = index;
            this.opTemp.activeTaskViewStage = stage;
            this.opTemp.activeTaskDeleteDescription = this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage][this.opTemp.activeTaskViewIndex].description;
            this.opTemp.activeTaskDeleteDeadline = this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage][this.opTemp.activeTaskViewIndex].deadline;
        },
        deleteTask: function(){
            this.projects[this.opTemp.activeWorkFlowIndex][this.opTemp.activeTaskViewStage].splice([this.opTemp.activeTaskViewIndex], 1);
            this.opTemp.activeTaskViewIndex = null;
            this.opTemp.activeTaskViewStage = null;
            $('#deleteTaskConsentModal').modal('hide');
            this.saveNeeded = false;
        },

        /* Task Movement */
        /*
        dragTask: function(fromStage, fromIndex, toStage){
            var from = this.projects[this.opTemp.activeWorkFlowIndex][fromStage];
            var to = this.projects[this.opTemp.activeWorkFlowIndex][toStage];
            var task = this.projects[this.opTemp.activeWorkFlowIndex][fromStage][fromIndex];
            to.unshift(task);
            from.splice(fromIndex, 1);
            this.saveNeeded = false;
        },
        */
        moveTaskForward: function(stage, index){
            if (stage === 'todo'){
                var nextStage = 'beingWorkedOn';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].todo[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].todo.splice(index, 1);
            }
            if (stage === 'beingWorkedOn'){
                var nextStage = 'doubleChecking';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.splice(index, 1);
            }
            if (stage === 'doubleChecking'){
                var nextStage = 'finished';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.splice(index, 1);
            }
            this.saveNeeded = false;
        },
        moveTaskBackward: function(stage, index){
            if (stage === 'beingWorkedOn'){
                var nextStage = 'todo';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.splice(index, 1);
            }
            if (stage === 'doubleChecking'){
                var nextStage = 'beingWorkedOn';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.splice(index, 1);
            }
            if (stage === 'finished'){
                var nextStage = 'doubleChecking';
                var dir = this.projects[this.opTemp.activeWorkFlowIndex].finished[index];
                var task = {
                    "_id": dir.id,
                    "description": dir.description,
                    "deadline": dir.deadline
                }
                this.projects[this.opTemp.activeWorkFlowIndex][nextStage].unshift(task);
                this.projects[this.opTemp.activeWorkFlowIndex].finished.splice(index, 1);
            }
            this.saveNeeded = false;
        },
        moveTaskUpward: function(stage, index){
            var to = index-1;
            var cursor = this.projects[this.opTemp.activeWorkFlowIndex][stage].splice(index, 1)[0];
            this.projects[this.opTemp.activeWorkFlowIndex][stage].splice(to, 0, cursor);
            this.saveNeeded = false;
        },
        moveTaskDownward: function(stage, index){
            var to = index+1;
            var cursor = this.projects[this.opTemp.activeWorkFlowIndex][stage].splice(index, 1)[0];
            this.projects[this.opTemp.activeWorkFlowIndex][stage].splice(to, 0, cursor);
            this.saveNeeded = false;
        },
        isNotFirstNotLastInTodo: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].todo.length-1;
            if (index === 0){
                return false;
            }
            if (index < total) {
                return true;
            }
            else{
                return false;
            }
        },
        isFirstButNotOnlyInTodo: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].todo.length-1;
            if(index === 0 && total > 0){
                return true;
            }
            else{
                return false;
            }
        },
        isFirstAndOnlyInTodo: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].todo.length-1;
            if(index === 0 && index === total){
                return true;
            }
            else{
                return false;
            }
        },
        isLastInTodo: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].todo.length-1;
            if(index === total && index !== 0){
                return true;
            }
            else{
                return false;
            }
        },
        isNotFirstNotLastInBeingWorkedOn: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.length-1;
            if (index === 0){
                return false;
            }
            if (index < total) {
                return true;
            }
            else{
                return false;
            }
        },
        isFirstButNotOnlyInBeingWorkedOn: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.length-1;
            if(index === 0 && total > 0){
                return true;
            }
            else{
                return false;
            }
        },
        isFirstAndOnlyInBeingWorkedOn: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.length-1;
            if(index === 0 && index === total){
                return true;
            }
            else{
                return false;
            }
        },
        isLastInBeingWorkedOn: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.length-1;
            if(index === total && index !== 0){
                return true;
            }
            else{
                return false;
            }
        },
        isNotFirstNotLastInDoubleChecking: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.length-1;
            if (index === 0){
                return false;
            }
            if (index < total) {
                return true;
            }
            else{
                return false;
            }
        },
        isFirstButNotOnlyInDoubleChecking: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.length-1;
            if(index === 0 && total > 0){
                return true;
            }
            else{
                return false;
            }
        },
        isFirstAndOnlyInDoubleChecking: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.length-1;
            if(index === 0 && index === total){
                return true;
            }
            else{
                return false;
            }
        },
        isLastInDoubleChecking: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.length-1;
            if(index === total && index !== 0){
                return true;
            }
            else{
                return false;
            }
        },
        isNotFirstNotLastInFinished: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].finished.length-1;
            if(index === 0){
                return false;
            }
            if(index < total){
                return true;
            }
            else{
                return false;
            }
        },
        isFirstButNotOnlyInFinished: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].finished.length-1;
            if(index === 0 && total > 0){
                return true;
            }
            else{
                return false;
            }
        },
        isFirstAndOnlyInFinished: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].finished.length-1;
            if(index === 0 && index === total){
                return true;
            }
            else{
                return false;
            }
        },
        isLastInFinished: function(index){
            var total = this.projects[this.opTemp.activeWorkFlowIndex].finished.length-1;
            if(index === total && index !== 0){
                return true;
            }
            else{
                return false;
            }
        },

        /* window controls */
        minimize: function(){
            var win = nw.Window.get();
            win.minimize();
        },
        resize: function(){
            var win = nw.Window.get();
            win.restore();
            this.opTemp.userCtrls.maxState = 0;
        },
        maximize: function(){
            var win = nw.Window.get();
            win.maximize();
            this.opTemp.userCtrls.maxState = 1;
        },
        close: function(){
            if(this.saveNeeded === false){
                $("#saveReminderModal2").modal('show');
            }
            else if(this.saveNeeded === true){
                var win = nw.Window.get();
                win.close();
            }
        },
        close2: function(){
            var win = nw.Window.get();
            win.close();
        }
    },
    computed: {
        showTopCards: function(){
            if(this.projects.length > 0){
                return true;
            }
            else if(this.projects.length === 0){
                return false;
            }
        },
        todoTotal: function(){
            return this.projects[this.opTemp.activeWorkFlowIndex].todo.length;
        },
        beingWorkedOnTotal: function(){
            return this.projects[this.opTemp.activeWorkFlowIndex].beingWorkedOn.length;
        },
        doubleCheckingTotal: function(){
            return this.projects[this.opTemp.activeWorkFlowIndex].doubleChecking.length;
        },
        finishedTotal: function(){
            return this.projects[this.opTemp.activeWorkFlowIndex].finished.length;
        }
    },
    beforeCreate: function() {
    },
    created: function() {
        /* create save locations and add sample files */
       _this = this;
        var fs = require('fs');
        const homedir = require('os').homedir();
        var dir = homedir+'\\Documents/KanDoList';
        var savedir = homedir+'\\.KanDoList';
        if (!fs.existsSync(dir)){
            fs.mkdirSync(dir);
        }
        if (!fs.existsSync(savedir)){
            var settings = {
                "showOpeningModal": true
            };
            fs.mkdirSync(savedir);
            var savefile = savedir+"\\settings.kdl";
            fs.writeFileSync(savefile, JSON.stringify(settings), function(err){});

            var recentdata = {};
            var recfile = savedir+"\\recent.kdl";
            fs.writeFileSync(recfile, JSON.stringify(recentdata), function(err){console.log(err)});
        }
        var sample3 = JSON.parse(fs.readFileSync("./assets/samplefiles/sample3.kdl", "utf-8"));
        _this.projects2.unshift(sample3);
        var sample2 = JSON.parse(fs.readFileSync("./assets/samplefiles/sample2.kdl", "utf-8"));
        _this.projects2.unshift(sample2);
        var sample1 = JSON.parse(fs.readFileSync("./assets/samplefiles/sample1.kdl", "utf-8"));
        _this.projects2.unshift(sample1);
        /* Load settings file */
        _this.settings = JSON.parse(fs.readFileSync(savedir+"\\settings.kdl", "utf-8"));
        var recentlyOpenedDirs = JSON.parse(fs.readFileSync(savedir+"\\recent.kdl", "utf-8"));
        for (var i = 0; i < recentlyOpenedDirs.length; ++i){
            _this.recentlyOpenedDirs.push(recentlyOpenedDirs[i]);
            var recentlyOpenedProject = JSON.parse(fs.readFileSync(recentlyOpenedDirs[i], "utf-8"));
            _this.recentlyOpened.push(recentlyOpenedProject);
        }
    },
    beforeMount: function() {
        if(this.appData.deepWorkSettings.longWorkSession === '' ||
        this.appData.deepWorkSettings.longBreakTime === '' ||
        this.appData.deepWorkSettings.shortWorkSession === '' ||
        this.appData.deepWorkSettings.shortBreakTime === ''){
            this.appData.deepWorkSettings.longWorkSession = this.appData.deepWorkDefaults.longWorkSession;
            this.appData.deepWorkSettings.longBreakTime = this.appData.deepWorkDefaults.longBreakTime;
            this.appData.deepWorkSettings.shortWorkSession = this.appData.deepWorkDefaults.shortWorkSession;
            this.appData.deepWorkSettings.shortBreakTime = this.appData.deepWorkDefaults.shortBreakTime;
        }
        else{/*pass*/}
        if(this.appData.userPrefs.soundOnSettings === ''){
            this.appData.userPrefs.soundOnSettings = this.appData.userPrefs.soundDefault;
        }
        else{/*pass*/}
    },
    mounted: function() {
        //get current window
        const win = nw.Window.get();
        win.maximize();
        win.setMinimumSize(800, 600)
        //keep dev tools open for debugging
        //tray controls
        var tray;
        var minToTray = $("#minToTray");
        minToTray.on('click', function(){
            win.hide();
            tray = new nw.Tray({ title: 'KanDoList', tooltip: "KanDoList Productivity App", icon: './icon.png' });
            tray.on('click', function() {
                win.show();
                this.remove();
                tray = null;
                win.maximize();
            });
        });
        $('.calinput').datepicker();

        if (this.settings.showOpeningModal === true){
            $("#introModal").modal("show");
        }
        $("#one").addClass("infoclicked");
    }
});
