import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🛒 Enregistrer une commande
export async function passerCommande(produit, prix, utilisateurEmail){

    try{
        await addDoc(collection(db, "commandes"), {
            produit: produit,
            prix: prix,
            email: utilisateurEmail,
            date: serverTimestamp(),
            statut: "en attente"
        });

        alert("✅ Commande envoyée avec succès !");
    }
    catch(e){
        alert("❌ Erreur commande : " + e.message);
    }
}
