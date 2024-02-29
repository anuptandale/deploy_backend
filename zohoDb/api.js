// zoho api - https://api-console.zoho.in/add

const axios = require("axios");
const fs = require("fs");
const authToken = "1000.03xxxxxxxxxxxxxxxxxa5317.dxxxxxxxxxxxxxxxxxfa";

const headers = {
  Authorization: `Zoho-oauthtoken ${authToken}`,
};
("https://recruit.zoho.com/recruit/v2/Candidates/search");

async function getModuleList(specific_module) {
  if (specific_module === undefined) {
    try {
      let modules = await axios.get(
        "https://recruit.zoho.com/recruit/v2/settings/modules",
        { headers }
      );
      console.log(modules);
    } catch (err) {
      console.log("Modules error", err);
    }
  } else {
    try {
      let modules = await axios.get(
        "https://recruit.zoho.com/recruit/v2/settings/modules" +
          `${specific_module}`,
        { headers }
      );
      console.log(modules);
    } catch (err) {
      console.log("Modules error", err);
    }
  }
}

async function getRoles() {
  try {
    let roles = await axios.get(
      "https://recruit.zoho.com/recruit/v2/settings/roles",
      { headers }
    );
    console.log(roles);
  } catch (err) {
    console.log("roles error", err);
  }
}

async function getProfile() {
  try {
    let profiles = await axios.get(
      "https://recruit.zoho.com/recruit/v2/settings/profiles",
      { headers }
    );
    console.log(profiles);
  } catch (err) {
    console.log("profiles error", err);
  }
}

async function getFields(module_api_name) {
  try {
    let fields = await axios.get(
      `https://recruit.zoho.com/recruit/v2/settings/fields?module=${module_api_name}`,
      { headers }
    );
    console.log(fields);
  } catch (err) {
    console.log("fields error", err);
  }
}

async function getCandidates(module_api_name) {
  try {
    let candidates = await axios.get(
      `https://recruit.zoho.com/recruit/v2/settings/custom_views?module=${module_api_name}`,
      { headers }
    );
    console.log(fields);
  } catch (err) {
    console.log("candidates error", err);
  }
}

async function getLists(module_api_name) {
  try {
    let lists = await axios.get(
      `https://recruit.zoho.com/recruit/v2/settings/related_lists?module=${module_api_name}`,
      { headers }
    );
    console.log(lists);
  } catch (err) {
    console.log("lists error", err);
  }
}

async function getNotes() {
  try {
    let notes = await axios.get(
      "https://recruit.zoho.com/recruit/v2/settings/Notes",
      { headers }
    );
    console.log(notes);
  } catch (err) {
    console.log("notes error", err);
  }
}

async function createNotes() {
  try {
    let data = fs.readFileSync("notes.json");
    let notes_created = await axios.post(
      "https://recruit.zoho.com/recruit/v2/settings/Notes",
      data,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(notes_created);
  } catch (err) {
    console.log("notes not created error", err);
  }
}

async function updateNotes(note_id) {
  try {
    let data = fs.readFileSync("notes.json");
    let notes_updated = await axios.put(
      `https://recruit.zoho.com/recruit/v2/settings/Notes/${note_id}`,
      data,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(notes_updated);
  } catch (err) {
    console.log("notes not updated error", err);
  }
}

async function deleteNotes(note_id) {
  try {
    let notes_deleted = await axios.delete(
      `https://recruit.zoho.com/recruit/v2/settings/Notes/${note_id}`,
      headers
    );
    console.log(notes_deleted);
  } catch (err) {
    console.log("notes not deleted error", err);
  }
}

async function getNoteType() {
  try {
    let note_type = axios.get(
      "https://recruit.zoho.com/recruit/v2/settings/note_types",
      { headers }
    );
    console.log(note_type);
  } catch (err) {
    console.log("ot got not type", err);
  }
}

async function Organization() {
  try {
    let organization = axios.get("https://recruit.zoho.com/recruit/v2/org", {
      headers,
    });
    console.log(organization);
  } catch (err) {
    console.log("organization", err);
  }
}

//records API's

async function getRecords(module_api_name) {
  try {
    let records = axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}`,
      { headers }
    );
    console.log(records);
  } catch (err) {
    console.log("records", err);
  }
}

async function insertRecords(module_api_name) {
  try {
    let insert_records = await axios.post(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}`,
      { headers }
    );
    console.log(insert_records);
  } catch (err) {
    console.log("recprds not created error", err);
  }
}

async function upsertRecords(module_api_name) {
  try {
    let data = fs.readFileSync("notes.json");
    let insert_records = await axios.post(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/upsert`,
      data,
      { headers }
    );
    console.log(insert_records);
  } catch (err) {
    console.log("records not upserted error", err);
  }
}

async function updateRecords(module_api_name) {
  try {
    let data = fs.readFileSync("notes.json");
    let record_update = await axios.put(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(record_update);
  } catch (err) {
    console.log("records not updated error", err);
  }
}

async function deleteRecords(module_api_name, record_id) {
  try {
    const response = await axios.delete(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}?ids=${record_id}`,
      { headers }
    );
    console.log(response);
  } catch (error) {
    console.error("Records not deleted", err);
  }
}

async function cancelInterview(record_id) {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        reason: "Candidate was a no-show",
        feedback:
          "The cancellation was confirmed with the candidate and we have documented proof of their consent.",
      },
    ],
  };
  try {
    const response = await axios.put(
      `https://recruit.zoho.com/recruit/v2/Interviews/${record_id}/action/cancel}`,
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

async function getList() {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/deleted`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function getList(module_api_name, record_id) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/{module_api_name}/{record_id}/associate`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function associateCandidate() {
  try {
    const response = await axios.put(
      `https://recruit.zoho.com/recruit/v2/Candidates/actions/associate`,
      { headers }
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

async function changeStatus(module_api_name) {
  try {
    const requestData = {
      data: [
        {
          ids: ["568998000001714001"],
          Candidate_Status: "New",
          comments: "Status updated to New",
        },
      ],
    };
    const response = await axios.put(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/status`,
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

async function searchRecords(module_api_name) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/search`,
      { headers }
    );
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

async function getRelatedrecords(module_api_name, record_id, related_module) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/${related_module}`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function revokeBlueprint(module_api_name, record_id) {
  try {
    const response = await axios.put(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/blueprint/revoke`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function createReview() {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.post(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

async function updateReview() {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.put(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

async function createAssessment() {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.post(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

async function createAssessment() {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.put(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

//Tags API
async function addTag(module_api_name, record_id, tag_name) {
  try {
    const requestData = {
      data: [
        {
          code: "SUCCESS",
          details: {
            id: 486812000001660091,
            tags: ["India", "New"],
          },
          message: "tags updated successfully",
          status: "success",
        },
      ],
    };
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/actions/add_tags?tag_names=${tag_name}`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function mergeTags() {
  try {
    const headers = {
      Authorization: `Zoho-oauthtoken ${authToken}`,
      "Content-Type": "application/json",
    };

    // Define the data for the request
    const requestData = {
      data: [
        {
          tags: [
            {
              conflict_id: "2000000039012",
            },
          ],
        },
      ],
    };
    const response = await axios.post(apiUrl, requestData, { headers });

    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error(err);
  }
}

async function getRecordCount(tag_id) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/settings/tags/${tag_id}/actions/records_count`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function updateRecords(module_api_name, tag_id) {
  try {
    let data = fs.readFileSync("notes.json");
    let record_update = await axios.put(
      `https://recruit.zoho.com/recruit/v2/settings/tags/${tag_id}?module=${module_api_name}`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(record_update);
  } catch (err) {
    console.log("records not updated error", err);
  }
}

async function getTags(module_api_name) {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.put(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

async function createTags() {
  const headers = {
    Authorization: `Zoho-oauthtoken ${authToken}`,
    "Content-Type": "application/json",
  };
  const requestData = {
    data: [
      {
        Review_Comments: "Candidate breezed through the interview. Top talent!",
        Interview_Name: "100002000000080025",
        Interview_Status: "On-Hold",
        $status_info: {
          Application_Status: "New",
        },
      },
    ],
  };
  try {
    const response = await axios.put(
      "https://recruit.zoho.com/recruit/v2/Reviews",
      requestData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error(err);
  }
}

async function removeTags(module_api_name, record_id, tag_name) {
  try {
    let resp = await axios.post(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/actions/remove_tags?tag_names=${tag_name}`,
      {
        headers: {
          Authorization: `Zoho-oauthtoken ${authToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(resp);
  } catch (err) {
    console.log(err);
  }
}

async function deleteTags(tag_id) {
  try {
    const resp = await axios.delete(
      `https://recruit.zoho.com/recruit/v2/settings/tags/${tag_id}`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

//User API
async function getTags(module_api_name) {
  try {
    const response = await axios.put(
      "https://recruit.zoho.com/recruit/v2/users",
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error("interview not cancelled", err);
  }
}

//Files API
async function getAttachment(module_api_name, record_id) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/Attachments`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function uploadAttachment(candidateId) {
  try {
    const headers = {
      Authorization: `Zoho-oauthtoken ${authToken}`,
      "Content-Type": "multipart/form-data",
    };
    const formData = new FormData();
    formData.append("attachmentUrl", "https://www.zohocorp.com");
    formData.append(
      "attachments_category",
      "Offer,Offers,Resume,Resume,Cover Letter"
    );
    const response = await axios.post(
      `https://recruit.zoho.com/recruit/v2/Candidates/${candidateId}/Attachments`,
      formData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error(err);
  }
}

async function getAttachment(module_api_name, record_id, attachment_id) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/Attachments/${attachment_id}`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function deleteAttachment(module_api_name, record_id, attachment_id) {
  try {
    const response = await axios.delete(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/Attachments/${attachment_id}`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function uploadPhoto(module_name, id) {
  try {
    let fileImage = fs.readFileSync("photo.png");
    const response = await axios.post(
      `https://recruit.zoho.com/recruit/v2/${module_name}/${id}/photo`,
      fileImage,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function getAttachment(module_api_name, record_id) {
  try {
    const response = await axios.get(
      `https://recruit.zoho.com/recruit/v2/${module_api_name}/${record_id}/photo`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function deleteAttachment(module_api_name, record_id, attachment_id) {
  try {
    const response = await axios.delete(
      `https://recruit.zoho.com/recruit/v2/4{module_api_name}/${record_id}/photo`,
      { headers }
    );
  } catch (err) {
    console.log(err);
  }
}

async function uploadDocument() {
  try {
    const response = await axios.post(
      `https://recruit.zoho.com/recruit/v2/Candidates/actions/import_document`,
      formData,
      { headers }
    );
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error(err);
  }
}
