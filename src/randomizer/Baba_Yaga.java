package randomizer;

public class Baba_Yaga extends godClass{ 
    public Baba_Yaga() {
    	 this.role = "Mid";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Baba_Yaga test = new Baba_Yaga();
    System.out.println(test.getDamageType());
    }
}
