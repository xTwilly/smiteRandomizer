package randomizer;

public class Ao_Kuang extends godClass{ 
    public Ao_Kuang() {
    	 this.role = "Jungle";
         this.damageType = "Magical";
         this.gameDefinedClass = "Mage";
    }


public static void main(String args[]){
    Ao_Kuang test = new Ao_Kuang();
    System.out.println(test.getDamageType());
    }
}
