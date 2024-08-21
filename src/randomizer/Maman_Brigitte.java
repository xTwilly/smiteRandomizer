package randomizer;

public class Maman_Brigitte extends godClass{ 
    public Maman_Brigitte() {
    	 this.role = "Jungle";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Maman_Brigitte test = new Maman_Brigitte();
    System.out.println(test.getDamageType());
    }
}
