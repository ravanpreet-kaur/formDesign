//Submit Button

Array.prototype.forEach.call(document.querySelectorAll(".file_upload_button"), function (button){
	const hiddenInput = button.parentElement.querySelector(".file_upload_field");
	const label = button.parentElement.querySelector(".file_upload_label");
	const defaultLabelText = "No file selected";

	label.textContent = defaultLabelText;
	label.title = defaultLabelText;

	button.addEventListener('click', function () {
		hiddenInput.click();
	});

	hiddenInput.addEventListener('change', function () {
		const filenameList = Array.prototype.map.call(hiddenInput.files, function (file) {
			return file.name;
		});
		label.textContent = filenameList.join(', ') || defaultLabelText;
		label.title = label.textContent
	});
});

//Country text field display

$(function() {
	$('input[name="country"]').on('click', function() {
		if ($(this).val() == 'Other Country') {
			$('#otherCountryChecked').show();
		}
		else {
			$('#otherCountryChecked').hide();
		}
	});
});

//Year of Passing (Graduation)

$(function() {
	$('input[name="course"]').on('click', function() {
		if ($(this).val() == 'undergrad' || $(this).val() == 'bachelors') {
			$('#Graduation').show();
		}
		else {
			$('#Graduation').hide();
		}
	});
});

//Year of Passing (Post Graduation)

$(function() {
	$('input[name="course"]').on('click', function() {
		if ($(this).val() == 'doingmasters' || $(this).val() == 'masters') {
			$('#postGraduation').show();
		}
		else {
			$('#postGraduation').hide();
		}
	});
});

//Other Graduation Year field

$(function() {
	$('select[name="graduationYear"]').on('click', function() {
		if ($(this).val() == 'other') {
			$('#otherGraduationYear').show();
		}
		else {
			$('#otherGraduationYear').hide();
		}
	});
});

//Other Post Graduation Year Field

$(function() {
	$('select[name="PostgraduateYear"]').on('click', function() {
		if ($(this).val() == 'other') {
			$('#otherPostGraduationYear').show();
		}
		else {
			$('#otherPostGraduationYear').hide();
		}
	});
});

//Other Option

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'other') {
			$('#otherDomainInternship').show();
		}
		else {
			$('#otherDomainInternship').hide();
		}
	});
});


//Built Environment Research: Building Services

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Built Environment Research: Building Services') {
			$('#BuiltEnvironmentResearchBuildingServices').show();
		}
		else {
			$('#BuiltEnvironmentResearchBuildingServices').hide();
		}
	});
});

//Built Environment Research: Environment Studies, Sustainable Architecture, Architecture and Urban Studies

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Built Environment Research: Environment Studies, Sustainable Architecture, Architecture and Urban Studies') {
			$('#BuiltEnvironmentResearchEnvironmentStudies').show();
		}
		else {
			$('#BuiltEnvironmentResearchEnvironmentStudies').hide();
		}
	});
});

//UI/UX

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'UI/UX') {
			$('#UI_UXfield').show();
		}
		else {
			$('#UI_UXfield').hide();
		}
	});
});

//Content Writing

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Content Writing') {
			$('#ContentWriting').show();
		}
		else {
			$('#ContentWriting').hide();
		}
	});
});

//Graphic Design

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Graphic Design') {
			$('#GraphicDesign').show();
		}
		else {
			$('#GraphicDesign').hide();
		}
	});
});

//Graphic Design Other Software

$(function() {
	$('select[name="software"]').on('click', function() {
		if ($(this).val() == 'Other') {
			$('#otherSoftware').show();
		}
		else {
			$('#otherSoftware').hide();
		}
	});
});

//Business Analyst

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Business Analyst') {
			$('#BusinessAnalyst').show();
		}
		else {
			$('#Business Analyst').hide();
		}
	});
});

//Market Research

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Market Research') {
			$('#MarketResearch').show();
		}
		else {
			$('#MarketResearch').hide();
		}
	});
});

//Web Development

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Web Development') {
			$('#WebDevelopment').show();
		}
		else {
			$('#WebDevelopment').hide();
		}
	});
});

//Cloud Infrastructure

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Cloud Infrastructure') {
			$('#CloudInfrastructure').show();
		}
		else {
			$('#CloudInfrastructure').hide();
		}
	});
});

//Cloud Infrastructure Other Cloud Platforms

$(function() {
	$('select[name="cloudPlatforms"]').on('click', function() {
		if ($(this).val() == 'Other') {
			$('#othercloudPlatforms').show();
		}
		else {
			$('#othercloudPlatforms').hide();
		}
	});
});

//Backend Developer

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Backend Developer') {
			$('#BackendDeveloper').show();
		}
		else {
			$('#BackendDeveloper').hide();
		}
	});
});

//Frontend Developer

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Frontend Developer') {
			$('#FrontendDeveloper').show();
		}
		else {
			$('#FrontendDeveloper').hide();
		}
	});
});

//People Empowerment (HR)

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'People Empowerment (HR)') {
			$('#HR').show();
		}
		else {
			$('#HR').hide();
		}
	});
});

//Finance Intern

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Finance Intern') {
			$('#FinanceIntern').show();
		}
		else {
			$('#FinanceIntern').hide();
		}
	});
});

//Brand & Communication

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Brand & Communication') {
			$('#BrandAndCommunication').show();
		}
		else {
			$('#BrandAndCommunication').hide();
		}
	});
});

//Social Media

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Social Media') {
			$('#SocialMedia').show();
		}
		else {
			$('#SocialMedia').hide();
		}
	});
});

//Social Media platform other option

$(function() {
	$('input[name="socialMediaPlatform5"]').on('click', function() {
		if ($(this).is(":checked")) {
			$('#othersocialMedia').show();
		}
		else {
			$('#othersocialMedia').hide();
		}
	});
});

//Social Media approach other option

$(function() {
	$('select[name="socialMediaApproach"]').on('click', function() {
		if ($(this).val() == 'Other') {
			$('#othersocialMediaApproach').show();
		}
		else {
			$('#othersocialMediaApproach').hide();
		}
	});
});

//Social Media business success other option

$(function() {
	$('select[name="socialMediaSuccess"]').on('click', function() {
		if ($(this).val() == 'Other') {
			$('#othersocialMediaSuccess').show();
		}
		else {
			$('#othersocialMediaSuccess').hide();
		}
	});
});

//Data Science

$(function() {
	$('select[name="domainInternship"]').on('click', function() {
		if ($(this).val() == 'Data Science') {
			$('#DataScience').show();
		}
		else {
			$('#DataScience').hide();
		}
	});
});