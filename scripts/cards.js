// You can add new scenarios, but make sure that there is exactly...
// * 1 hackerCard per scenario
// * 3 playerCards per scenario

var scenarios = [
  /*1*/{
    hackerCard : {
      description : "Τι θεωρείς προσωπική πληροφορία και δε πρέπει να μοιράζεσαι στο διαδίκτυο;",
      power : 2,
    },
    playerCards : [
      {
        description : "Τη διεύθυνσή μου",
        power : 3,
      },
      {
        description : "Το όνομα του σκύλου μου",
        power : 1,
      },
      {
        description : "Τη θερμοκρασία στην πόλη που μένω",
        power : 1,
      }
    ]
  },
  
  /*2*/{
    hackerCard : {
      description : "Τι πρέπει να κάνεις αν ένας ξένος σε προσεγγίσει στο διαδίκτυο;",
      power : 2,
    },
    playerCards : [
      {
        description : "Να ενημερώσω κάποιον ενήλικα που εμπιστεύομαι",
        power : 3,
      },
      {
        description : " Να του ζητήσω το τηλέφωνο του να γνωριστούμε",
        power : 1,
      },
      {
        description : "Να του στείλω κάποια φωτογραφία μου",
        power : 1,
      }
    ]
  },
  
  /*3*/{
    hackerCard : {
      description : "Μετά από μία διαφωνία στο σχολείο, μια ομάδα παιδιών σου στέλνει απειλητικά μηνύματα σε κάποιο κοινωνικό δίκτυο. Τι πρέπει να κάνεις;",
      power : 2,
    },
    playerCards : [
      {
        description : "Να το πω στους γονείς μου",
        power : 3,
      },
      {
        description : "Να αγνοήσω τα σχόλια που μου στέλνουν",
        power : 1,
      },
      {
        description : "Να τους απαντήσω στο ίδιο επιθετικό ύφος",
        power : 1,
      }
    ]
  },
  
  /*4*/{
    hackerCard : {
      description : "Λαμβάνεις ένα μήνυμα από κάποιον που αυτοαποκαλείται “φίλος” σου και σου ζητάει να συναντηθείτε στο πάρκο σε μια ώρα:",
      power : 2,
    },
    playerCards : [
      {
        description : "Μιλάω στους γονείς μου για αυτό και αγνοώ το μήνυμα",
        power : 3,
      },
      {
        description : "Ζητάω σε κάποιον φίλο μου να έρθει μαζί στο ραντεβού",
        power : 1,
      },
      {
        description : "Στέλνω μήνυμα απάντηση στον υποτιθέμενο φίλο μου να μου θυμίσει από πού γνωρίζόμαστε",
        power : 1,
      }
    ]
  },
  
  /*5*/{
    hackerCard : {
      description : "Πως μπορείς να παραμείνεις ασφαλής στο διαδίκτυο:",
      power : 2,
    },
    playerCards : [
      {
        description : " Να ανοίγω e-mail μόνο από φίλους μου",
        power : 3,
      },
      {
        description : "Να κοινοποιώ τον κωδικό μου στους φίλους μου",
        power : 1,
      },
      {
        description : "Να κατεβάζω μουσική και παιχνίδια από άγνωστα site",
        power : 1,
      }
    ]
  },
  
  /*6*/{
    hackerCard : {
      description : "Ποιος από τους παρακάτω κωδικούς σας φαίνεται καλύτερος;",
      power : 2,
    },
    playerCards : [
      {
        description : "F001@#",
        power : 3,
      },
      {
        description : "Password",
        power : 1,
      },
      {
        description : "Helen",
        power : 1,
      }
    ]
  },
  
  /*7*/{
    hackerCard : {
      description : "Με ποιους μπορείς να μοιραστείς τον κωδικό σου;",
      power : 2,
    },
    playerCards : [
      {
        description : "Κανέναν",
        power : 3,
      },
      {
        description : "Τους φίλους και την οικογένεια μου",
        power : 1,
      },
      {
        description : "Την οικογένεια μου",
        power : 1,
      }
    ]
  },
  
  /*8*/{
    hackerCard : {
      description : "Ποιες φωτογραφίες είναι σωστό να ανεβάζεις στο διαδίκτυο",
      power : 2,
    },
    playerCards : [
      {
        description : "Φωτογραφίες που δεν με πειράζει να τις δει όλος ο κόσμος",
        power : 3,
      },
      {
        description : "Φωτογραφίες που θέλω να δουν οι φίλοι μου και η οικογένεια μου",
        power : 1,
      },
      {
        description : "Φωτογραφίες που θέλω να δουν οι φίλοι μου",
        power : 1,
      }
    ]
  },
  
  /*9*/{
    hackerCard : {
      description : "Κάποιος φίλος σου, σου αναφέρει μία ντροπιαστική πληροφορία για κάποιον άλλο συμμαθητή σου.",
      power : 2,
    },
    playerCards : [
      {
        description : " Σκέφτομαι πρώτα πως θα αισθανθεί αυτός ο συμμαθητής μου και κρατάω την πληροφορία για τον εαυτό μου.",
        power : 3,
      },
      {
        description : "Την ποστάρω να την δουν όλοι",
        power : 1,
      },
      {
        description : "Την ποστάρω κάπου που μπορούν να τη δουν μόνο φίλοι μου",
        power : 1,
      }
    ]
  },
  
  /*10*/{
    hackerCard : {
      description : "Λαμβάνεις κάποιο e-mail από το αγαπημένο σου site να τους προωθήσεις τον κωδικό σου για να κάνουν κάποιες τροποποιήσεις στο λογαριασμό σου. Τι κάνεις;",
      power : 2,
    },
    playerCards : [
      {
        description : "Αγνοώ το email και το διαγράφω",
        power : 3,
      },
      {
        description : "Τους στέλνω τον κωδικό μου",
        power : 1,
      },
      {
        description : "Τους στέλνω το τηλέφωνο μου για να επικοινωνήσουμε και να τους δώσω τον κωδικό μου",
        power : 1,
      }
    ]
  },
  
];