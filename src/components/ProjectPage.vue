<template>
  <div 
    class="container"
  >
    <!--Nume proiect & Termen-->
    <div
      class="section"
    >
      <div
        class="w-1/2 leftSection"
      >
        <div
          class="sectionTitle"
        >
          Nume proiect
        </div>
        <div>
          <input
            type="text"
            placeholder="Introdu numele proiectului"
            v-model="projectNameInput"
            spellcheck="false"
            class="w-full inputField"
          >
        </div>
        <div
          class="mt-2 text-red-600 flex flex-row"
          :class="{ 'hidden' : validProjectNameInput}"
        >
          <div>
            <svg
              class="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div
            class="ml-1"
          >
            Câmpul nu poate fi gol!
          </div>
        </div>
      </div>
      <div
        class="w-1/2 rightSection"
      >
        <div
          class="sectionTitle"
        >
          Termen
        </div>
        <div>
          <input
            type="text"
            placeholder="23.12.2020"
            v-model="deadlineInput"
            spellcheck="false"
            class="w-full inputField"
          >
          <!-- <DatepickerLite
            v-model="deadlineInput"
            class="text-black cursor-pointer"
          /> -->
        </div>
        <div
          class="mt-2 text-red-600 flex flex-row"
          :class="{ 'hidden' : validDeadlineInput}"
        >
          <div>
            <svg
              class="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <div
            class="ml-1"
          >
            Câmpul nu este valid!
          </div>
        </div>
      </div>
    </div>

    <!--Responsabil & Beneficiar-->
    <div
      class="section"
    >
      <div
        class="w-1/2 leftSection"
      >
        <div
          class="sectionTitle"
        >
          Responsabil
        </div>
        <div class="relative z-20">
          <input
            v-model="responsibleInput"
            @keyup="setResponsibleFlagTrue()"
            class="dropdown-input text-black inputField w-full"
            type="text"
            spellcheck="false"
            placeholder="Introdu responsabilul proiectului"
          >
          <div
            v-show="allResponsibles && responsibleFlag"
            class="dropdown-list"
          >
            <div
              v-show="searchResponsible(item.responsabil)"
              v-for="item in allResponsibles"
              @click="setResponsibleFlagFalse(item.responsabil)"
              :key="item.responsabil"
              class="dropdown-item"
            >
              {{ item.responsabil }}
            </div>
          </div>
          <div
            class="mt-2 text-red-600 flex flex-row"
            :class="{ 'hidden' : validResponsibleInput}"
          >
            <div>
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div
              class="ml-1"
            >
              Câmpul nu poate fi gol!
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 rightSection"
      >
        <div
          class="sectionTitle"
        >
          Beneficiar
        </div>
        <div class="relative z-20">
          <input
            v-model="beneficiaryInput"
            @keyup="setBeneficiaryFlagTrue()"
            class="dropdown-input text-black inputField w-full"
            type="text"
            spellcheck="false"
            placeholder="Introdu beneficiarul proiectului"
          >
          <div
            v-show="allBeneficiaries && beneficiaryFlag"
            class="dropdown-list"
          >
            <div
              v-show="searchBeneficiary(item.beneficiar)"
              v-for="item in allBeneficiaries"
              @click="setBeneficiaryFlagFalse(item.beneficiar)"
              :key="item.beneficiar"
              class="dropdown-item"
            >
              {{ item.beneficiar }}
            </div>
          </div>
          <div
            class="mt-2 text-red-600 flex flex-row"
            :class="{ 'hidden' : validBeneficiaryInput}"
          >
            <div>
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div
              class="ml-1"
            >
              Câmpul nu poate fi gol!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Status & Prioritate-->
    <div
      class="section"
    >
      <div
        class="w-1/2 leftSection"
      >
        <div
          class="sectionTitle"
        >
          Status
        </div>
        <div class="relative">
          <div
            class="selectionArea"
            @click="toggleStatusFlag()"
          >
            <span>{{ statusField }}</span>
            <svg
              v-show="!statusFlag"
              class="w-7 h-7 inset-y-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-show="statusFlag"
              class="w-7 h-7 inset-y-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            v-show="allStatuses && statusFlag"
            class="dropdown-list"
          >
            <div
              v-for="item in allStatuses"
              @click="setStatusFlagFalse(item.status)"
              :key="item.status"
              class="dropdown-item"
            >
              {{ item.status }}
            </div>
          </div>
          <div
            class="mt-2 text-red-600 flex flex-row"
            :class="{ 'hidden' : validStatusField}"
          >
            <div>
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div
              class="ml-1"
            >
              Nicio variantă nu a fost selectată!
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 rightSection"
      >
        <div
          class="sectionTitle"
        >
          Prioritate
        </div>
        <div class="relative">
          <div
            class="selectionArea"
            @click="togglePriorityFlag()"
          >
            <span>{{ priorityField }}</span>
            <svg
              v-show="!priorityFlag"
              class="w-7 h-7 inset-y-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-show="priorityFlag"
              class="w-7 h-7 inset-y-0 right-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div
            v-show="allPriorities && priorityFlag"
            class="dropdown-list"
          >
            <div
              v-for="item in allPriorities"
              @click="setPriorityFlagFalse(item.prioritate)"
              :key="item.prioritate"
              class="dropdown-item"
            >
              {{ item.prioritate }}
            </div>
          </div>
          <div
            class="mt-2 text-red-600 flex flex-row"
            :class="{ 'hidden' : validPriorityField}"
          >
            <div>
              <svg
                class="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div
              class="ml-1"
            >
              Nicio variantă nu a fost selectată!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Participanti & Adauga participant-->
    <div
      class="section"
    >
      <div
        class="w-1/2 leftSection"
      >
        <div
          class="sectionTitle"
        >
          Participanți
        </div>
        <div class="participantsArea">
          <div
            v-for="(data, index) in participants"
            :key="data"
            class="participant"
            @click="removeParticipant(index)"
          >
            <div class="flex flex-row">
              {{ data }}
              <svg
                class="w-7 h-7 ml-3 hover:opacity-50 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 rightSection"
      >
        <div
          class="sectionTitle"
        >
          Adaugi participant?
        </div>
        <div class="flex flex-row">
          <input
            type="text"
            v-model="newParticipantInput"
            placeholder="Introdu numele participantului"
            spellcheck="false"
            class="w-full inputField"
          >
          <svg
            @click="addParticipant()"
            class="w-10 h-10 ml-1 cursor-pointer hover:bg-gray-800 rounded-xl"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
            />
          </svg>
        </div>
      </div>
    </div>

    <!--Note & Salvare proiect-->
    <div
      class="flex flex-row justify-center items-center py-8"
    >
      <div
        class="w-1/2 leftSection"
      >
        <div
          class="notesSection"
        >
          <div>Vezi notele</div>
          <div>
            <svg
              class="w-7 h-7 ml-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="w-1/2 rightSection"
      >
        <div
          class="sectionTitle"
        >
          <button
            class="button"
            @click="saveProject()"
          >
            Salvează modificările
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';

// import DatepickerLite from 'vue3-datepicker-lite';

export default {
  name: "ProjectPage",
  components: {
    // DatepickerLite
  },
  computed: {
    ...mapGetters([
      'allProjects',
      'allResponsibles',
      'allBeneficiaries',
      'allStatuses',
      'allPriorities'
    ]),
  },
  created() {
    this.setupCurrentProject();
  },
  data() {
    return {
      projectId : -1,
      currentProject : {},

      projectNameInput : "",
      deadlineInput: "",

      responsibleFlag : false,
      responsibleInput : "",

      beneficiaryFlag : false,
      beneficiaryInput : "",

      priorityFlag: false,
      priorityField : "",

      statusFlag: false,
      statusField : "",

      participants : [],
      newParticipantInput : "",

      validProjectNameInput : true,
      validResponsibleInput : true,
      validBeneficiaryInput : true,
      validDeadlineInput : true,
      validStatusField : true,
      validPriorityField : true,
    }
  },
  methods: {
    ...mapActions([
      'fetchProjects',
      'fetchResponsibles',
      'fetchBeneficiaries',
      'fetchStatuses',
      'fetchPriorities',
      'addProject',
      'updateProject'
    ]),

    //get current project and other entities
    setupCurrentProject(){
      //set data
      this.fetchProjects();
      this.fetchResponsibles();
      this.fetchBeneficiaries();
      this.fetchStatuses();
      this.fetchPriorities();

      //get project
      if(this.$route.params.id != undefined){
        this.projectId = this.$route.params.id;
        this.currentProject = this.allProjects[parseInt(this.projectId) - 1];

        this.projectNameInput = this.currentProject.proiect;
        this.deadlineInput = this.currentProject.termen;

        this.responsibleInput = this.currentProject.responsabil;
        this.beneficiaryInput = this.currentProject.beneficiar;

        this.statusField = this.currentProject.status;
        this.priorityField = this.currentProject.prioritate;

        this.participants = this.currentProject.participanti;
      }
    },

    //save project
    saveProject(){
      var allValid = true;

      //validate fields
      if(this.projectNameInput == ''){
        this.validProjectNameInput = false;
        allValid = false;
      } else this.validProjectNameInput = true;
        
      if(this.deadlineInput == ''){
        this.validDeadlineInput = false;
        allValid = false;
      } else this.validDeadlineInput = true;
      
      if(this.responsibleInput == ''){
        this.validResponsibleInput = false;
        allValid = false;
      } else this.validResponsibleInput = true;

      if(this.beneficiaryInput == ''){
        this.validBeneficiaryInput = false;
        allValid = false;
      } else this.validBeneficiaryInput = true;

      if(this.statusField == ''){
        this.validStatusField = false;
        allValid = false;
      } else this.validStatusField = true;

      if(this.priorityField == ''){
        this.validPriorityField = false;
        allValid = false;
      } else this.validPriorityField = true;

      //create and save new project
      if(allValid){
        var newId;
        (this.projectId == -1) ? newId = this.allProjects.length + 1 : newId = this.projectId;
        const newProject = {
          "id": newId,
          "nrParticipanti": this.participants.length,
          "participanti": this.participants,
          "proiect": this.projectNameInput,
          "responsabil": this.responsibleInput,
          "beneficiar": this.beneficiaryInput,
          "status": this.statusField,
          "prioritate": this.priorityField,
          "termen": this.deadlineInput
        };
        //add or update new project
        if(this.projectId == -1)
          this.addProject(newProject);
        else
          this.updateProject(newProject);
      }
    },

    //search
    searchResponsible (item) {
      let responsible = item.toLowerCase()
      let input = this.responsibleInput.toLowerCase()
      return responsible.includes(input)
    },
    searchBeneficiary (item) {
      let beneficiary = item.toLowerCase()
      let input = this.beneficiaryInput.toLowerCase()
      return beneficiary.includes(input)
    },

    //set flag true
    setResponsibleFlagTrue() {
      if(!this.responsibleFlag)
        this.responsibleFlag = true;
    },
    setBeneficiaryFlagTrue() {
      if(!this.beneficiaryFlag)
        this.beneficiaryFlag = true;
    },

    //toggle flag
    toggleStatusFlag() {
      this.statusFlag = !this.statusFlag;
    },
    togglePriorityFlag() {
      this.priorityFlag = !this.priorityFlag;
    },

    //set flag false
    setResponsibleFlagFalse(item) {
      this.responsibleFlag = false;
      this.responsibleInput = item;
    },
    setBeneficiaryFlagFalse(item) {
      this.beneficiaryFlag = false;
      this.beneficiaryInput = item;
    },
    setStatusFlagFalse(item) {
      this.statusFlag = false;
      this.statusField = item;
    },
    setPriorityFlagFalse(item) {
      this.priorityFlag = false;
      this.priorityField = item;
    },

    //add-remove participant
    removeParticipant(index){
      this.participants.splice(index, 1);
    },
    addParticipant(){
      if(this.newParticipantInput != ""){
        this.participants.push(this.newParticipantInput);
        this.newParticipantInput = "";
      }
    },
  }
}
</script>

<style scoped>
.container {
  margin-left: 10%;
  margin-right: 10%;
}

.dropdown {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.dropdown-input .dropdown-selected {
  width: 100%;
  padding: 10px 16px;
  border: 1px solid transparent;
  background: #edf2f7;
  line-height: 1.5em;
  outline: none;
  border-radius: 8px;
}

.dropdown-selected:hover {
  background: white;
  border-color: #e2e8f0;
}

.dropdown-input:focus {
  background: white;
  border-color: #e2e8f0;
}

.dropdown-input::placeholder {
  opacity: 0.7;
}

.dropdown-selected {
  font-weight: bold;
  cursor: pointer;
}

.dropdown-list {
  position: absolute;
  width: 100%;
  max-height: 500px;
  margin-top: 4px;
  overflow-y: auto;
  background: white;
  color: black;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
}

.dropdown-item {
  display: flex;
  width: 100%;
  padding: 11px 16px;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #edf2f7;
}

.dropdown-item-flag {
  max-width: 24px;
  max-height: 18px;
  margin: auto 12px auto 0;
}

</style>